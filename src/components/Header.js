import React from 'react';
import { Heading } from '@chakra-ui/react';
import { TITLE } from '../resources/Constants';

const Header = () => {
	return <Heading padding={5}>{TITLE}</Heading>;
};

export default Header;
