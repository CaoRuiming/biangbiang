import React, { Component } from 'react';

export default class EnglishDisplay extends Component {
	render() {
		const style = {
			'borderTop': '2px solid black',
			'position': 'fixed',
    	'bottom': '0',
    	'width': '100%',
			'background': 'white'
		};

		const outputText =
			(this.props.selectedText.length < 1) ?
				'Click on output to select text to translate!' :
				(this.props.selectedText + ' → ' + this.props.englishTranslation);

		return (
			<div style = { style }>
				<p>
					{ outputText }
				</p>
			</div>
		);
	}
}
