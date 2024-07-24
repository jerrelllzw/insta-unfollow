import React, { useState } from 'react';
import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import Title from './components/Title';
import FileInput from './components/FileInput';
import SubmitButton from './components/SubmitButton';
import BackButton from './components/BackButton';
import ResultsTable from './components/ResultsTable';

const App = () => {
	const [files, setFiles] = useState([]);
	const [files2, setFiles2] = useState([]);
	const [results, setResults] = useState([]);
	const [results2, setResults2] = useState([]);
	const [showResults, setShowResults] = useState(false);

	return (
		<ChakraProvider>
			<Title />
			<Flex
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				bg='gray.100'
				height='100vh'
			>
				{!showResults && (
					<>
						<Flex width={'50vw'} gap={5}>
							<FileInput
								files={files}
								setFiles={setFiles}
								label={'Drop your followers_1.json file here'}
							/>
							<FileInput
								files={files2}
								setFiles={setFiles2}
								label={'Drop your following.json file here'}
							/>
						</Flex>
						<SubmitButton
							files={files}
							files2={files2}
							setResults={setResults}
							setResults2={setResults2}
							setShowResults={setShowResults}
						/>
					</>
				)}
				{showResults && (
					<>
						<Flex justifyContent='center' alignItems='center'>
							<Flex flexDirection='column' alignItems='center' padding={5}>
								<Text>:(</Text>
								<ResultsTable results={results} />
							</Flex>
							<Flex flexDirection='column' alignItems='center' padding={5}>
								<Text>:)</Text>
								<ResultsTable results={results2} />
							</Flex>
						</Flex>
						<BackButton
							setFiles={setFiles}
							setFiles2={setFiles2}
							setShowResults={setShowResults}
						/>
					</>
				)}
			</Flex>
		</ChakraProvider>
	);
};

export default App;
