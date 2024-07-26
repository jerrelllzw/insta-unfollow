import React from 'react';
import { Button } from '@chakra-ui/react';

const BackButton = (props) => {
	const { setFollowersFile, setFollowingsFile, setShowResults } = props;

	const reset = () => {
		setShowResults(false);
		setFollowersFile([]);
		setFollowingsFile([]);
	};

	return (
		<Button colorScheme='teal' onClick={reset}>
			Back
		</Button>
	);
};

export default BackButton;
