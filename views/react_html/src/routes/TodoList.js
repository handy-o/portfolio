import React, {Component} from 'react';
import TodoListContents from "../components/TodoList/TodoListContents";
import Form from "../components/TodoList/Form";
import TodoItemList from "../components/TodoList/TodoItemList";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    id = 3
    state = {
        input:'',
        todos: [
            {id:0, text: '뼈해장국', checked: true},
            {id:1, text: '양평해장국', checked: false},
            {id:2, text: '소고기해장국', checked: true}
        ]
    }

    handleChange = (e) => {
        console.log('chhhhange')
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        console.log('create')
        const {input, todos } = this.state;
        this.setState({
            input:'',
            todos: todos.concat({   //concat을 사용하여 배열에 추가(새배열) | 리액트 state 에서 배열을 다룰 때는 절대로 push 를 사용하면 안됩니다.
                id: this.id++,
                text: input,
                checked: false
            })
        })
    }
    handleKeyPress = (e) => {
        if( e.key === 'Enter') {
            this.handleCreate();
        }
    }

    /* 체크 하거나 푸는 코드 */
    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex( todo => todo.id === id); // id를 가지고 몇번째 아이템인지 찾기
        const selected = todos[index];  // 선택한 객체

        /*const nextTodos = [...todos]; // 배열복사

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }*/
        this.setState({
            //todos:nextTodos
            todos: [
                ...todos.slice(0, index),
                {
                    ...selected,
                    checked: !selected.checked
                },
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }
    render() {
        const { input, todos} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle
        } = this;

        return (
            <>
               {/* <HeadNews />*/}
                <TodoListContents form={(
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                )}>
                    <TodoItemList todos={todos} onToggle={handleToggle}/>
                </TodoListContents>

            </>
        );
    }
}

export default TodoList;