import React from 'react';
import { Button } from '@chakra-ui/react';

const BackButton = (props) => {
	const { setFiles, setFiles2, setShowResults } = props;

	const reset = () => {
		setShowResults(false);
		setFiles([]);
        setFiles2([]);
	};

	return (
		<Button mt={6} colorScheme='green' onClick={reset}>
			Back
		</Button>
	);
};

export default BackButton;
