import React, {Component} from 'react';
/*
* 이 컴포넌트 또한 추후 진행 할 최적화를 목적으로 클래스형으로 작성
*/
class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={ () => onToggle(id)} > {/* onClick={onToggle{id}} 절대 no ! */}
                <div className="remove" onClick={ (e) => {
                    e.stopPropagation();    // 적어주지 않으면 부모의 onToggle도 실행되어 삭제가 제대로 되지 않는다.
                    onRemove(id)
                }}> &times; </div>
                {/*<div className={`todo-text ${checked && 'checked'}`}> */}  {/*동적 클래스명 : 템플릿 리터럴 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals*/}
                <div className={`todo-text ${checked ? 'checked' : ''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && ( <div className="check-mark"> V </div> )
                }
            </div>
        );
    }
}

export default TodoItem;