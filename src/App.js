import React from 'react';
import { ChakraProvider, useDisclosure, Flex } from '@chakra-ui/react';
import Header from './components/page/Header';
import Body from './components/page/Body';

const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<ChakraProvider>
			<Flex flexDirection='column' bg='#222831' minHeight='100vh'>
				<Header onOpen={onOpen} />
				<Body isOpen={isOpen} onClose={onClose} />
			</Flex>
		</ChakraProvider>
	);
};

export default App;
