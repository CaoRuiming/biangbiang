import Cedict from './Cedict.js';

export default class Dictionary {

	//input must be a string that can be found in the dictionary
	static getEnglishTranslation(input) {
		input = ' '+input+' ';
		const dictionary = Cedict.getDictionaryText();
		const indexNeeded = dictionary.indexOf(input);

		if (indexNeeded !== -1) {
			const startIndex = dictionary.substr(indexNeeded).indexOf('/')+indexNeeded+1;
			const endIndex = dictionary.substr(startIndex).indexOf('/')+startIndex;
			return dictionary.substring(startIndex, endIndex);
		} else {
			return 'No translation to show...';
		}
	}

	//input must be a string that can be found in the dictionary
	static getPinyin(input) {
		input = ' '+input+' ';
		const dictionary = Cedict.getDictionaryText();
		const indexNeeded = dictionary.indexOf(input);

		if (indexNeeded !== -1 && !this.isInvalidChar(input.substring(1,input.length-1))) {
			const startIndex = dictionary.substr(indexNeeded).indexOf('[')+indexNeeded+1;
			const endIndex = dictionary.substr(startIndex).indexOf(']')+startIndex;
			return dictionary.substring(startIndex, endIndex);
		} else {
			return ' ';
		}
	}

	static isInvalidChar(input) {
		return ',.!\'"-–—[]{}()'.indexOf(input) !== -1;
	}
}
