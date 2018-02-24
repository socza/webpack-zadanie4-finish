import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const items = this.props.todoList.map((item, index) => {
			return(
				<Todo key={item.id} removeTodo={this.props.removeTodo} myIndex={index} item={item}/>
			)
		});
		return (
			<div className={style.TodoList}>
				{items}
			</div>
		);
	}
}

export default TodoList;