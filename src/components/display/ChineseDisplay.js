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
		this.props.input.slice(0).map((character) => {
			return (
				<SingleCharacterDisplay
					pinyin = { Dictionary.getPinyin(character) }
					character = { character }
				/>
			);
		});
	}

	render() {
		return (
			<div>
				{ this.displayChineseCharacters() }
			</div>
		);
	}
}
