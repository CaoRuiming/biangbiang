import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OutputDisplay from './components/display/OutputDisplay.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.state = ({
			input: '',
			selectedText: [],
		});
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	}

	handleSelection(index, character) {
		let updatedSelectedText = [...this.state.selectedText, {index: index, character: character}];
		updatedSelectedText.sort((a,b) => {return a.index >= b.index;});
		if(updatedSelectedText.filter((element) => {return element.index === index;}).length > 1) {
			updatedSelectedText = updatedSelectedText.filter((element) => {return element.index !== index;});
		}
		this.setState({ selectedText: updatedSelectedText });
	}

  render() {
		const processedSelectedText =
			this.state.selectedText.map((object) => object.character).join('');
    return (
      <div className='App'>
			<h1>
				<img
					src = { logo }
					style = {{ 'width': '75pt', 'height': '75pt', 'viewBox': '0 0 550.000000 135.000000' }}
					className='App-logo'
					alt='logo'
				/>
				 ⇋ BiángBiáng
			</h1>
			<textarea
				style = {{ 'marginBottom': '30px' }}
				placeholder = 'Paste input here!'
				onChange = { this.handleChange }>
			</textarea>
			<OutputDisplay
				input = { this.state.input }
				selectedText = { processedSelectedText }
				handleSelection = { this.handleSelection }
			/>
      </div>
    );
  }
}

export default App;
