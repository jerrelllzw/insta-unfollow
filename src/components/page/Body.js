import React, { useState } from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import JsonInput from '../base/JsonInput';
import SubmitButton from '../base/buttons/SubmitButton';
import BackButton from '../base/buttons/BackButton';
import ResultsTable from '../base/ResultsTable';
import {
	FOLLOWERS_FILENAME,
	FOLLOWINGS_FILENAME,
} from '../../common/Constants';
import HelpButton from '../base/buttons/HelpButton';

const Body = () => {
	const [followersFile, setFollowersFile] = useState([]);
	const [followingsFile, setFollowingsFile] = useState([]);
	const [happyResults, setHappyResults] = useState([]);
	const [sadResults, setSadResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	return (
		<Flex
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			bg='gray.100'
			height='100vh'
		>
			{!showResults && (
				<>
					<Heading size='4xl'>Upload Here</Heading>
					<Flex width={'50vw'} gap={5}>
						<JsonInput
							files={followersFile}
							setFiles={setFollowersFile}
							label={FOLLOWERS_FILENAME}
						/>
						<JsonInput
							files={followingsFile}
							setFiles={setFollowingsFile}
							label={FOLLOWINGS_FILENAME}
						/>
					</Flex>
					<SubmitButton
						followersFile={followersFile ? followersFile[0] : null}
						followingsFile={followingsFile ? followingsFile[0] : null}
						setHappyResults={setHappyResults}
						setSadResults={setSadResults}
						setShowResults={setShowResults}
					/>
					<HelpButton />
				</>
			)}
			{showResults && (
				<>
					<Flex justifyContent='center' alignItems='center'>
						<Flex flexDirection='column' alignItems='center' padding={5}>
							<Text>:)</Text>
							<ResultsTable results={happyResults} />
						</Flex>
						<Flex flexDirection='column' alignItems='center' padding={5}>
							<Text>:(</Text>
							<ResultsTable results={sadResults} />
						</Flex>
					</Flex>
					<BackButton
						setFollowersFile={setFollowersFile}
						setFollowingsFile={setFollowingsFile}
						setShowResults={setShowResults}
					/>
				</>
			)}
		</Flex>
	);
};

export default Body;
