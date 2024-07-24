import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Title from './components/Title';
import FileInput from './components/FileInput';
import SubmitButton from './components/SubmitButton';

const App = () => {
	const [files, setFiles] = useState([]);

	return (
		<ChakraProvider>
			<Flex
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				height='100vh'
				bg='gray.100'
			>
				<Title />
				<FileInput files={files} setFiles={setFiles} />
				<SubmitButton files={files} />
			</Flex>
		</ChakraProvider>
	);
};

export default App;
