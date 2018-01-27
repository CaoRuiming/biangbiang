import Cedict from './Cedict.js';

export default class Dictionary {
	//Time Conversions
	static translatorTest() {
		console.log(this.getPinyin('三倍EB'));
		return this.getEnglishTranslation('三倍EB');
	}

	//input must be a string that can be found in the dictionary
	static getEnglishTranslation(input) {
		const dictionary = Cedict.getDictionaryText();

		const indexNeeded = dictionary.indexOf(input);
		console.log('indexNeeded: '+indexNeeded);

		if (indexNeeded != -1) {
		let startIndex = dictionary.substr(indexNeeded).indexOf('/')+indexNeeded+1;
		console.log('startIndex: '+startIndex);

		let endIndex = dictionary.substr(startIndex).indexOf('/')+startIndex;
		console.log('endIndex: '+endIndex);

		console.log(dictionary.substring(startIndex, endIndex));
		return dictionary.substring(startIndex, endIndex);
		} else {
			return "This is not in the dictionary!";
		}
	}

	//input must be a string that can be found in the dictionary
	static getPinyin(input) {
		const dictionary = Cedict.getDictionaryText();

		const indexNeeded = dictionary.indexOf(input);
		console.log('indexNeeded: '+indexNeeded);

		if (indexNeeded !== -1) {
			let startIndex = dictionary.substr(indexNeeded).indexOf('[')+indexNeeded+1;
			console.log('startIndex: '+startIndex);

			let endIndex = dictionary.substr(startIndex).indexOf(']')+startIndex;
			console.log('endIndex: '+endIndex);

			console.log(dictionary.substring(startIndex, endIndex));

			return dictionary.substring(startIndex, endIndex).split(" ");
		} else {
			return "This is not in the dictionary!";
		}


	}
}
