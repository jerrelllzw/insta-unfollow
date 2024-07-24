import React from 'react';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';

const ResultsTable = (props) => {
	const { results } = props;

	return (
		<TableContainer overflowY='auto' maxHeight={'30vh'}>
			<Table variant='striped' colorScheme='teal'>
				<Tbody>
					{results.map((result) => (
						<Tr key={result}>
							<Td>{result}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ResultsTable;
