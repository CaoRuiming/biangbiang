import Cedict from './Cedict.js';

export default class Dictionary {
	//testing function
	static translatorTest() {
		console.log(this.getPinyin('三倍EB'));
		return this.getEnglishTranslation('三倍EB');
	}

	//input must be a string that can be found in the dictionary
	static getEnglishTranslation(input) {
		input = ' '+input+' ';
		const dictionary = Cedict.getDictionaryText();
		const indexNeeded = dictionary.indexOf(input);

		if (indexNeeded !== -1) {
			let startIndex = dictionary.substr(indexNeeded).indexOf('/')+indexNeeded+1;
			let endIndex = dictionary.substr(startIndex).indexOf('/')+startIndex;
			return dictionary.substring(startIndex, endIndex);
		} else {
			return 'This is not in the dictionary!';
		}
	}

	//input must be a string that can be found in the dictionary
	static getPinyin(input) {
		input = ' '+input+' ';
		const dictionary = Cedict.getDictionaryText();
		const indexNeeded = dictionary.indexOf(input);

		if (indexNeeded !== -1) {
			let startIndex = dictionary.substr(indexNeeded).indexOf('[')+indexNeeded+1;
			let endIndex = dictionary.substr(startIndex).indexOf(']')+startIndex;
			console.log(dictionary.substring(startIndex, endIndex).split(' '));
			return dictionary.substring(startIndex, endIndex).split(' ');
		} else {
			return 'This is not in the dictionary!';
		}


	}
}
