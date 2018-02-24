import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'Clean room'
                }, {
                id: 2,
                    text: 'Wash the dishes'
                }, {
                id: 3,
                    text: 'Feed my cat'
                }, {
                id: 4,
                    text: '"Piwo" z Patrykiem ... bezalkoholowe :)'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        event.preventDefault();
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title todoData={this.state.data} todoName="ToDo"/>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todoList={this.state.data} removeTodo={this.removeTodo}/>
            </div>
        );
    }
}

export default App;