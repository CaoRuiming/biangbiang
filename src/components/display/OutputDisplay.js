import React, { Component } from 'react';

import Dictionary from '../../utils/Dictionary.js';
import ChineseDisplay from './ChineseDisplay.js';
import EnglishDisplay from './EnglishDisplay.js';

export default class OutputDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = ({

		});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			);
		}

		return (
			<div>
				<ChineseDisplay
					input = { this.props.input.slice(0).split('') }
				/>
				<EnglishDisplay
					englishTranslation = { Dictionary.getEnglishTranslation(this.props.input) }
				/>
			</div>
		);
	}
}
