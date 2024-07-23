import React, { useState } from 'react';
import { ChakraProvider, Heading, Input, Flex } from '@chakra-ui/react';

function App() {
	const [fileData, setFileData] = useState(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			const text = e.target.result;
			processFileData(text);
		};

		if (file) {
			reader.readAsText(file);
		}
	};

	const processFileData = (data) => {
		console.log(data);
	};

	return (
		<ChakraProvider>
			<Flex
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				height='100vh'
				bg='gray.100'
			>
				<Heading mb={6}>InstaUnfollow</Heading>
				<Input type='file' onChange={handleFileUpload} width='auto' />
			</Flex>
		</ChakraProvider>
	);
}

export default App;
