import React, { Component } from 'react';

export default class SingleCharacterDisplay extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleDragStart = this.handleDragStart.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.state = ({
			isSelected: false,
			userIsDragging: false
		});
	}

	handleClick(e) {
		this.setState({ isSelected: !this.state.isSelected });
		this.props.handleSelection(this.props.index, this.props.character);
	}

	handleDragStart(e) {
		e.dataTransfer.setDragImage(document.createElement('canvas'), 0, 0);
	}

	handleDragEnter(e) {
		this.setState({ isSelected: !this.state.isSelected });
		this.props.handleSelection(this.props.index, this.props.character);
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
				className = { 'unselectable' }
				id = { 'drop' }
				draggable = { true }
				onClick = { (e) => this.handleClick(e) }
				onDragStart = { (e) => this.handleDragStart(e) }
				onDragEnter = { (e) => this.handleDragEnter(e) }
			>
				<p onDragEnter = { (e) => {} }>{ this.props.pinyin }</p>
				<p onDragEnter = { (e) => {} }>{ this.props.character }</p>
			</div>
		);
	}
}
