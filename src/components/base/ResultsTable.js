import React from 'react';
import { Table, Tbody, Tr, Td, TableContainer, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ResultsTable = (props) => {
	const { results } = props;

	return (
		<TableContainer overflowY='auto' maxHeight={'30vh'}>
			<Table variant='simple'>
				<Tbody>
					{results.map((result) => (
						<Tr key={result}>
							<Td color='#EEEEEE'>
								<Link href={'https://www.instagram.com/' + result} isExternal>
									<ExternalLinkIcon mx='2px' />
									{result}
								</Link>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ResultsTable;
