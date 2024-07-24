import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react';

const ResultsTable = (props) => {
	const { results } = props;

	return (
		<TableContainer>
			<Table variant='striped' colorScheme='teal'>
				<TableCaption>:)</TableCaption>
				<Thead>
					<Tr>
						<Th>Accounts</Th>
					</Tr>
				</Thead>
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
