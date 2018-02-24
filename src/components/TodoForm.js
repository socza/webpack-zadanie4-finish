import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	addTodo(event) {
		event.preventDefault();
		this.props.addTodo(this.state.value);
		this.setState({value: ''});
	}
	render() {
		return (
			<div className={style.TodoForm}>	
				<form  onSubmit={(event) => this.addTodo(event)}>
					<input type="text" value={this.state.value} name="name" placeholder="Utwórz kolejne zadanie:" onChange={this.handleChange}/>
					<input type="submit" value="Utwórz"/>
				</form>
			</div>	
		)
	}
}

export default TodoForm;