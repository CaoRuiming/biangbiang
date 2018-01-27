import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dictionary from './utils/Dictionary.js';
import OutputDisplay from './components/display/OutputDisplay.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = ({ input: '' });
	}

	translatorTest() {
		return Dictionary.translatorTest('A')
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({ input: e.target.value });
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
				defaultValue = 'Input...'
				onChange = { this.handleChange }>
			</textarea>
			<button className='button'>Biáng it</button>
			<p>Output</p>
			<OutputDisplay input = { this.state.input } />
      </div>
    );
  }
}

export default App;
