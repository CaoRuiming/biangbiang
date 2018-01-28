import React, { Component } from 'react';

import Dictionary from '../../utils/Dictionary.js';
import SingleCharacterDisplay from './SingleCharacterDisplay.js';

export default class ChineseDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = ({ mouseIsDown: false });
	}

	shouldComponentUpdate(nextProps) {
		const differentHandleSelection = this.props.handleSelection !== nextProps.handleSelection;
		const differentInput = this.props.input !== nextProps.input;
    return differentHandleSelection || differentInput;
  }

	displayChineseCharacters() {
		return this.props.input.split('').map((character, index) => {
			return (
				<SingleCharacterDisplay
					key = { index }
					index = { index }
					pinyin = { Dictionary.getPinyin(character) }
					character = { character }
					handleSelection = { this.props.handleSelection }
				/>
			);
		});
	}

	render() {
		return (
			<div style = {{ 'marginBottom': '60px' }}>
				{ this.displayChineseCharacters() }
			</div>
		);
	}
}
