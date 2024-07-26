import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import HelpButton from '../base/buttons/HelpButton';

const Header = (props) => {
	const { onOpen } = props;

	return (
		<Flex alignItems='center' bg='#222831' padding={5}>
			<Heading  color='#EEEEEE' style={{marginRight: 'auto'}}>
				InstaUnfollow
			</Heading>
			<HelpButton onOpen={onOpen} />
		</Flex>
	);
};

export default Header;
