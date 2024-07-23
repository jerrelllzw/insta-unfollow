import React, { useState } from 'react';
import { ChakraProvider, Heading, Flex, Button } from '@chakra-ui/react';
import { Dropzone, FileMosaic } from '@files-ui/react';

function App() {
	const [files, setFiles] = useState([]);
	const updateFiles = (incomingFiles) => {
		//do something with the files
		console.log('incoming files', incomingFiles);
		setFiles(incomingFiles);
		//even your own upload implementation
	};
	const removeFile = (id) => {
		setFiles(files.filter((x) => x.id !== id));
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
				<Flex flexDirection='row' justifyContent='center' alignItems='center'>
					<Dropzone onChange={updateFiles} value={files}>
						{files.map((file) => (
							<FileMosaic key={file.id} {...file} onDelete={removeFile} info />
						))}
					</Dropzone>
					<Dropzone onChange={updateFiles} value={files}>
						{files.map((file) => (
							<FileMosaic key={file.id} {...file} onDelete={removeFile} info />
						))}
					</Dropzone>
				</Flex>
				<Button colorScheme='blue'>Button</Button>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
