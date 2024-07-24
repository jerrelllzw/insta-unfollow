import React from 'react';
import { Button } from '@chakra-ui/react';

const SubmitButton = (props) => {
	const { files } = props;

	const validateFiles = () => {
		if (files.length < 2) {
			alert('Please upload both followers_1.json and following.json files.');
			return false;
		}
		if (
			(files[0].name === 'followers_1.json' &&
				files[1].name === 'following.json') ||
			(files[1].name === 'followers_1.json' &&
				files[0].name === 'following.json')
		) {
			return true;
		} else {
			alert('Please upload both followers_1.json and following.json files.');
			return false;
		}
	};

	const handleOnClick = () => {
		if (validateFiles()) {
			const readers = files.map((file) => {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = (event) => {
						resolve(JSON.parse(event.target.result));
					};
					reader.onerror = (error) => reject(error);
					reader.readAsText(file.file);
				});
			});

			Promise.all(readers).then((contents) => {
				console.log(contents);
			});
		}
	};

	return (
		<Button mt={6} colorScheme='green' onClick={handleOnClick}>
			Get Results
		</Button>
	);
};

export default SubmitButton;
