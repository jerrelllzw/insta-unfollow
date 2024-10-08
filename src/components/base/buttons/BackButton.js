import React from 'react';
import { Button } from '@chakra-ui/react';
import { useToastUtils } from '../../../common/ToastUtils';
import { BACK_MESSAGE } from '../../../common/Constants';

const BackButton = (props) => {
	const { setFollowersFile, setFollowingsFile, setShowResults } = props;

	const toast = useToastUtils();

	const reset = () => {
		setShowResults(false);
		setFollowersFile([]);
		setFollowingsFile([]);
		toast(BACK_MESSAGE, 'success');
	};

	return (
		<Button colorScheme='teal' onClick={reset} style={{ marginBottom: '3em' }}>
			Back
		</Button>
	);
};

export default BackButton;
