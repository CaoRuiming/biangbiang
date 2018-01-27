import React, { Component } from 'react';

export default class EnglishDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = ({

		});
	}

	render() {
		return (
			<div>
				<p>{ this.props.englishTranslation }</p>
			</div>
		);
	}
}
