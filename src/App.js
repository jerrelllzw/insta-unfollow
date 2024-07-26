import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/page/Header';
import Body from './components/page/Body';

const App = () => {
	return (
		<ChakraProvider>
			<Header />
			<Body />
		</ChakraProvider>
	);
};

export default App;
