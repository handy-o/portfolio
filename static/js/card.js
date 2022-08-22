const $ = (str) => document.querySelector(str);
const $$ = (str) => document.querySelectorAll(str);

(function () {
	if (!window.app) {
		window.app = {};
	}
	app.carousel = {
		removeClass: function (el, classname = '') {
			if (el) {
				if (classname === '') {		// 클래스명이 없으면
					el.className = '';			// 없다
				} else {									// 있으면 
					el.classList.remove(classname); // 제거
				}
				return el;
			}
			return;
		},
		// 아이템 수 만큼 load
		reorder: function () {
			let childcnt = $('#carousel').children.length; 	// 자식노드수를 구해서
			let childs = $('#carousel').children;						// 자식노드

			for (let j = 0; j < childcnt; j++) {		// 자식수만큼 for문
				childs[j].dataset.pos = j;						// 자식의 position을 j로
				//console.log(childs[j]);
			}
		},
		move: function (el) {											// 움직임
			let selected = el;											// 선택된 요소가 el
				// typeof 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.
			if (typeof el === 'string') {						// 믄억에 선택된 요소가 스트링이면
				//console.log(`got string: ${el}`);
				selected =
					el == 'next'														// 'next'랑 같으면 선택	(넥스트 클릭하면)
						? $('.selected').nextElementSibling		// .selected의 형제(밑으로 다)
						: $('.selected').previousElementSibling; // .selected의 형제(위로 다)
				console.dir(selected);
			}

			let curpos = parseInt(app.selected.dataset.pos);		// 현재 위치
			let tgtpos = parseInt(selected.dataset.pos);				// 타겟?위치?
			console.log('curpos ' + curpos);	// next 2    prev 2
			console.log('tgtpos ' + tgtpos);  //      3         1

			let cnt = curpos - tgtpos;	// next 2-3 : -1    || prev 2 - 1 : 1
			let dir = cnt < 0 ? -1 : 1; // 방향은 next -1  || prev 1
			let shift = Math.abs(cnt); 	// .abs() 절대값반환 항상 양수 반환 = 모두 1

			for (let i = 0; i < shift; i++) { // for문에 돌리려고 양수로
				let el =
					dir == -1											// next 면은
						? $('#carousel').firstElementChild		// 첫번째 요소로
						: $('#carousel').lastElementChild;	  // 아니면 마지막요소로

				if (dir == -1) {	// next이면
					el.dataset.pos = $('#carousel').children.length; // 갯수만큼 pos
					$('#carousel').append(el); // #carousel 안에서 뒤에 el 요소를 추가
				} else {
					el.dataset.pos = 0;	// prev이면 0
					$('#carousel').prepend(el);  // #carousel 안에서 앞으로 el 추가
				}

				app.carousel.reorder(); // 재정립
			}

			app.selected = selected;
			let next = selected.nextElementSibling;  // next는 선택요소의 다음형제들
			// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
			var prev = selected.previousElementSibling;  // prev는 선택요소의 앞에 형제들
			// ? selected.previousElementSibling : selected.parentElement.lastElementChild;
			var prevSecond = prev													// 이전이 가 참이면 (있음녀?)
				? prev.previousElementSibling         			// 앞에 형제들의 또 앞에 형제드
				: selected.parentElement.lastElementChild;  // 아니면 선택요소의 부모의 마지막노드
			var nextSecond = next 												// 다음이 있으면?
				? next.nextElementSibling                   // 다음의 다음형제들 
				: selected.parentElement.firstElementChild;	// 아니면 선택 요소의 부모의 첫번째 노드로

			selected.className = '';
			selected.classList.add('selected');					// 선택요소에는 .selected 추가

			app.carousel.removeClass(prev).classList.add('prev');	// .prev
			app.carousel.removeClass(next).classList.add('next'); // .next

			app.carousel.removeClass(prevSecond).classList.add('prevLeftSecond'); // prev의 이전 위에 형제들
			app.carousel.removeClass(nextSecond).classList.add('nextRightSecond'); // next의 다음 아래 형제들

			app.carousel.nextAll(nextSecond).forEach((item) => { // 다음다음에 있는 모든 다음요소들을 forEach문으로 돌려서 .hideRight추가
				item.className = '';
				item.classList.add('hideRight');
			});
			app.carousel.prevAll(prevSecond).forEach((item) => {	// 이전이전에 있는모든 이전욧들을 forEach문으로 돌려서 .hideLeft 추가
				item.className = '';
				item.classList.add('hideLeft');
			});
		},
		nextAll: function (el) {
			let els = [];

			if (el) {
				while ((el = el.nextElementSibling)) {
					els.push(el);														// push로 다음 요소들 추가해줌
				}
			}

			return els;
		},
		prevAll: function (el) {
			let els = [];

			if (el) {
				while ((el = el.previousElementSibling)) {
					els.push(el);															// push로 이전요소들 추가
				}
			}

			return els;
		},
		keypress: function (e) {	//
			switch (e.which) {
				case 37: // left
					app.carousel.move('prev');
					break;

				case 39: // right
					app.carousel.move('next');
					break;

				default:
					return;
			}
			e.preventDefault();
			return false;
		},
		select: function (e) {
			console.log(`select: ${e}`);
			let tgt = e.target;
			while (!tgt.parentElement.classList.contains('carousel')) {
				tgt = tgt.parentElement;
			}

			app.carousel.move(tgt);
		},
		previous: function (e) {
			app.carousel.move('prev'); // 이전함수 실행
		},
		next: function (e) {
			app.carousel.move('next'); // 다음함수 실행
		},
		doDown: function (e) {
			console.log(`down: ${e.x}`);
			app.carousel.state.downX = e.x; // 아래..?
		},
		doUp: function (e) {		// 위..?
			console.log(`up: ${e.x}`);
			let direction = 0,
				velocity = 0;

			if (app.carousel.state.downX) {
				direction = app.carousel.state.downX > e.x ? -1 : 1;
				velocity = app.carousel.state.downX - e.x;

				if (Math.abs(app.carousel.state.downX - e.x) < 10) {
					app.carousel.select(e);
					return false;
				}
				if (direction === -1) {
					app.carousel.move('next');
				} else {
					app.carousel.move('prev');
				}
				app.carousel.state.downX = 0;
			}
		},
		init: function () {
			document.addEventListener('keydown', app.carousel.keypress);
			// $('#carousel').addEventListener("click", app.carousel.select, true);
			$('#carousel').addEventListener('mousedown', app.carousel.doDown);
			$('#carousel').addEventListener('touchstart', app.carousel.doDown);
			$('#carousel').addEventListener('mouseup', app.carousel.doUp);
			$('#carousel').addEventListener('touchend', app.carousel.doup);

			app.carousel.reorder();
			$('#prev').addEventListener('click', app.carousel.previous);
			$('#next').addEventListener('click', app.carousel.next);
			app.selected = $('.selected');
		},
		state: {},
	};
	app.carousel.init();
})();

const goSection = (name) => {
	let setTop = document.querySelector(name).offsetTop - 60;
	//window.scrollTo(0, setTop);
	window.scrollTo({ top: setTop, left: 0, behavior: 'smooth' });
	console.log(setTop);
};
