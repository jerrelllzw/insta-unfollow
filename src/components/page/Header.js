import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';
import { TITLE } from '../../common/Constants';
import Help from '../base/Help';

const Header = () => {
	return (
		<Flex alignItems='center'>
			<Heading padding={5}>{TITLE}</Heading>
			<Help />
		</Flex>
	);
};

export default Header;
