import React, {Component} from 'react';
import TodoItem from "./TodoItem";


/*
* ‘리스트’ 를 렌더링하게 될 때는,
* 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성하세요.
* 그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문입니다.
*/

/*
* todos: to do 객체들이 들어있는 배열
* onToggle: 체크박스를 키고 끄는 함수
* onRemove: 아이템을 삭제시키는 함수
*
* .map() -> todos 배열을 컴포넌트 배열로 변환
*/
class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos && todos.map(     // 원래는 const todoList = todos.map(todo => ...) 의 형태여야 하지만,
            ({id, text, checked}) => (  // 함수의 파라미터 부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어주었습니다.
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}        // 배열 렌더링 시 key값 필수
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;