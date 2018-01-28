import React, { Component } from 'react';

export default class SingleCharacterDisplay extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = ({
			isSelected: false
		});
	}

	handleClick(e) {
		this.setState({ isSelected: !this.state.isSelected });
		this.props.handleSelection(e, this.props.character);
	}

	render() {

		const style = {
			'display': 'inline-block',
			'paddingLeft': '5px' ,
			'paddingRight': '5px',
			'background': (this.state.isSelected) ? '#ffe6e6' :'white'
		};

		return (
			<div
				style = { style }
				className = 'unselectable'
				onClick = { (e) => this.handleClick(e) }
			>
				<p>{ this.props.pinyin }</p>
				<p>{ this.props.character }</p>
			</div>
		);
	}
}
