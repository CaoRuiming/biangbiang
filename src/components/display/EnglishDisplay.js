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

		return (
			<div style = { style }>
				<p>
					{ this.props.selectedText + ' → ' + this.props.englishTranslation }
				</p>
			</div>
		);
	}
}
