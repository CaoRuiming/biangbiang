import React, { Component } from 'react';

import Dictionary from '../../utils/Dictionary.js';
import ChineseDisplay from './ChineseDisplay.js';
import EnglishDisplay from './EnglishDisplay.js';

export default class OutputDisplay extends Component {

	render() {
		return (this.props.input.length < 1) ? null :
			(<div>
					{ (this.props.input.length > 0) ? <p>Output</p> : null }
					<ChineseDisplay
						input = { this.props.input }
						handleSelection = { this.props.handleSelection }
					/>
					<EnglishDisplay
						selectedText = { this.props.selectedText }
						englishTranslation = { Dictionary.getEnglishTranslation(this.props.selectedText) }
					/>
				</div>);
	}
}
