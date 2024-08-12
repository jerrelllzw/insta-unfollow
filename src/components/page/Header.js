import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import HelpButton from '../base/buttons/HelpButton';

const Header = (props) => {
	const { onOpen } = props;

	return (
		<Flex alignItems='center' padding='5'>
			<Flex style={{ marginRight: 'auto' }}>
				<Heading color='#c1558b'>Insta</Heading>
				<Heading color='#8a49a1'>Unfollow</Heading>
			</Flex>

			<HelpButton onOpen={onOpen} />
		</Flex>
	);
};

export default Header;
