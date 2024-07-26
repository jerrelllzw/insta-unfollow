import { INVALID_JSON_FILE_MESSAGE } from './Constants';

export const readJson = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const result = JSON.parse(event.target.result);
				resolve(result);
			} catch (error) {
				reject(new Error(INVALID_JSON_FILE_MESSAGE));
			}
		};
		reader.onerror = (error) => reject(error);
		reader.readAsText(file);
	});
};
