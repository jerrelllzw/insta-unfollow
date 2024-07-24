import React from 'react';
import { Button } from '@chakra-ui/react';

const SubmitButton = (props) => {
	const { files, files2, setResults, setResults2, setShowResults } = props;

	const validateFiles = () => {
		if (files.length !== 1 || files[0].name !== 'followers_1.json') {
			alert('Please upload followers_1.json');
			return false;
		}
		if (files2.length !== 1 || files2[0].name !== 'following.json') {
			alert('Please upload following.json');
			return false;
		}
		return true;
	};

	const handleOnClick = () => {
		if (validateFiles()) {
			const reader1 = new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = (event) => {
					resolve(JSON.parse(event.target.result));
				};
				reader.onerror = (error) => reject(error);
				reader.readAsText(files[0].file);
			});
			const reader2 = new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = (event) => {
					resolve(JSON.parse(event.target.result));
				};
				reader.onerror = (error) => reject(error);
				reader.readAsText(files2[0].file);
			});

			Promise.all([reader1, reader2]).then((contents) => {
				console.log(contents);
				let followers_1 = contents[0];
				let following = contents[1];
				let results = followers_1.map((follower) => {
					return follower.string_list_data[0].value;
				});
				let results2 = following.relationships_following.map((rs) => {
					return rs.string_list_data[0].value;
				});
				setResults(results2.filter((x) => !results.includes(x)));
				setResults2(results2.filter((x) => results.includes(x)));
				setShowResults(true);
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
