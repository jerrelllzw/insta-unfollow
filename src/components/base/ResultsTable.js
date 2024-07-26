import React from 'react';
import {
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	Link,
	Thead,
	Th,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ResultsTable = (props) => {
	const { results } = props;

	return (
		<TableContainer
			overflowY='scroll'
			maxHeight='30vh'
			border='1px solid #EEEEEE'
			borderRadius='md'
			width='20vw'
		>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th color='#EEEEEE'>Index</Th>
						<Th color='#EEEEEE'>Account</Th>
					</Tr>
				</Thead>
				<Tbody>
					{results.map((result) => (
						<Tr key={result} color='#EEEEEE'>
							<Td>{results.indexOf(result) + 1}</Td>
							<Td>
								<Link href={'https://www.instagram.com/' + result} isExternal>
									{result}
									<ExternalLinkIcon mx='2px' />
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
