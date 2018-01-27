import React, { Component } from 'react';

export default class SingleCharacterDisplay extends Component {
	render() {
		return (
			<div style = {{ 'display': 'inline-block' }}>
				<p>{ this.props.pinyin }</p>
				<p>{ this.props.character }</p>
			</div>
		);
	}
}
