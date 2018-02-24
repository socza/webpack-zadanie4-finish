import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={style.Title}>
				<p>Witamy w aplikacji - {this.props.todoName}</p>
				<p>Liczba wszystkich zadań do wykonania: {this.props.todoData.length}</p>
			</div>
		);
	}
}

export default Title;