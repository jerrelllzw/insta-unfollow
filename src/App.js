import React, { useState } from 'react';
import { ChakraProvider, Flex, Text } from '@chakra-ui/react';
import Title from './components/Title';
import FileInput from './components/FileInput';
import SubmitButton from './components/SubmitButton';
import BackButton from './components/BackButton';
import ResultsTable from './components/ResultsTable';

const App = () => {
	const [files, setFiles] = useState([]);
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
				height='100vh'
				bg='gray.100'
			>
				{!showResults && (
					<>
						<FileInput files={files} setFiles={setFiles} />
						<SubmitButton
							files={files}
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
						<BackButton setFiles={setFiles} setShowResults={setShowResults} />
					</>
				)}
			</Flex>
		</ChakraProvider>
	);
};

export default App;
