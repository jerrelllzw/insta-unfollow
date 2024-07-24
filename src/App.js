import React, { useState } from 'react';
import { ChakraProvider, Heading, Flex, Button } from '@chakra-ui/react';
import { Dropzone, FileMosaic } from '@files-ui/react';
import Title from './components/Title';

const App = () => {
	const [files, setFiles] = useState([]);

	const updateFiles = (incomingFiles) => {
		setFiles(incomingFiles);
	};

	const removeFile = (id) => {
		setFiles(files.filter((x) => x.id !== id));
	};

	const validateFiles = () => {
		if (files.length < 2) {
			alert('Please upload both followers_1.json and following.json files.');
			return false;
		}
		if (
			(files[0].name === 'followers_1.json' &&
				files[1].name === 'following.json') ||
			(files[1].name === 'followers_1.json' &&
				files[0].name === 'following.json')
		) {
			return true;
		} else {
			alert('Please upload both followers_1.json and following.json files.');
			return false;
		}
	};

	const handleOnClick = () => {
		if (validateFiles()) {
			const readers = files.map((file) => {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = (event) => {
						resolve(JSON.parse(event.target.result));
					};
					reader.onerror = (error) => reject(error);
					reader.readAsText(file.file);
				});
			});

			Promise.all(readers).then((contents) => {
				console.log(contents);
			});
		}
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
				<Title/>
				<Dropzone
					onChange={updateFiles}
					value={files}
					accept='.json'
					maxFiles={2}
					style={{ width: '50vw' }}
					label={'Drop your followers_1.json and following.json files here'}
					color='#6200EE'
					background='radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)'
				>
					{files.map((file) => (
						<FileMosaic key={file.id} {...file} onDelete={removeFile} />
					))}
				</Dropzone>
				<Button mt={6} colorScheme='green' onClick={handleOnClick}>
					Get Results
				</Button>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
