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

	handleSelection(e, character) {
		this.setState({ selectedText: [...this.state.selectedText, character] });
	}

  render() {
    return (
      <div className='App'>
			<h1>
				<img
					src = { logo }
					style = {{ 'width': '75pt', 'height': '75pt', 'viewBox': '0 0 550.000000 135.000000' }}
					className='App-logo'
					alt='logo'
				/>
				Biáng
			</h1>
			<textarea
				placeholder = 'Paste input here!'
				onChange = { this.handleChange }>
			</textarea>
			<p>Output</p>
			<OutputDisplay
				input = { this.state.input }
				selectedText = { this.state.selectedText.join('') }
				handleSelection = { this.handleSelection }
			/>
      </div>
    );
  }
}

export default App;
