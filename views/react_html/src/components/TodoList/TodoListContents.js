import React from 'react';
import TodoItemList from "./TodoItemList";

import "./style.scss"

// 함수형 컴포넌트. 파라미터로 받게 되는 것이 props이며 이를 비구조화 할당이라고 합니다.
const TodoListContents = ( {form, children }) => {  // (props) => {...}
    return (
        <main className="todo-list-template" id="todo">
            <div className="titl">
                오늘할일
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );

}

export default TodoListContents;