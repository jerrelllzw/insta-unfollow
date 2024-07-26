import React from 'react';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import Header from './components/page/Header';
import Body from './components/page/Body';

const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<ChakraProvider>
			<Header onOpen={onOpen} />
			<Body isOpen={isOpen} onClose={onClose} />
		</ChakraProvider>
	);
};

export default App;
