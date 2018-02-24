import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button onClick={() => this.props.removeTodo(this.props.item.id)}>{this.props.myIndex + 1} - {this.props.item.text}</button>
        )
    }
}

export default Todo;