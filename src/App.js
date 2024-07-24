import React, { useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Title from './components/Title';
import FileInput from './components/FileInput';
import SubmitButton from './components/SubmitButton';
import BackButton from './components/BackButton';
import ResultsTable from './components/ResultsTable';

const App = () => {
	const [files, setFiles] = useState([]);
	const [results, setResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

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
				{!showResults && <FileInput files={files} setFiles={setFiles} />}
				{!showResults && (
					<SubmitButton
						files={files}
						setResults={setResults}
						setShowResults={setShowResults}
					/>
				)}
				{showResults && <ResultsTable results={results} />}
				{showResults && (
					<BackButton setFiles={setFiles} setShowResults={setShowResults} />
				)}
			</Flex>
		</ChakraProvider>
	);
};

export default App;
