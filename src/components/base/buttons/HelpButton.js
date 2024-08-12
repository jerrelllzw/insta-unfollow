import React from 'react';
import { Button } from '@chakra-ui/react';

const HelpButton = (props) => {
	const { onOpen } = props;

	return (
		<Button onClick={onOpen} colorScheme='whiteAlpha' style={{ marginLeft: '1em' }}>
			Need Help?
		</Button>
	);
};

export default HelpButton;
