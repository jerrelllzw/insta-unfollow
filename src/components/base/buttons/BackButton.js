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
		<Button mt={6} colorScheme='teal' onClick={reset}>
			Back
		</Button>
	);
};

export default BackButton;
