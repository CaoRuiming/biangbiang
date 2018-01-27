import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dictionary from './dictionary/Dictionary.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	translatorTest() {
		return Dictionary.translatorTest('A')
	}

  render() {
    return (
      <div className="App">
        <p>Hello!</p>
				<p>{ this.translatorTest() }</p>
      </div>
    );
  }
}

export default App;
