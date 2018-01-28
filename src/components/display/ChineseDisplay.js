import React, { Component } from 'react';

import Dictionary from '../../utils/Dictionary.js';
import SingleCharacterDisplay from './SingleCharacterDisplay.js';

export default class ChineseDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = ({

		});
	}

	displayChineseCharacters() {
		return this.props.input.split('').map((character, index) => {
			return (
				<SingleCharacterDisplay
					key = { index }
					pinyin = { Dictionary.getPinyin(character) }
					character = { character }
					handleSelection = { this.props.handleSelection }
				/>
			);
		});
		 /*
		const input = this.props.input.split('');
		let result = [];
		for(let i = 0; i < input.length; i ++) {
			const character = input[i];
			result.push(
				<SingleCharacterDisplay
					key = { i }
					pinyin = { Dictionary.getPinyin(character) }
					character = { character }
					handleSelection = { this.props.handleSelection }
				/>
			);
		}
		return result;*/
	}

	render() {
		return (
			<div style = {{ 'marginBottom': '60px' }}>
				{ this.displayChineseCharacters() }
			</div>
		);
	}
}
