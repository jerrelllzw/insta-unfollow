import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import JsonInput from '../base/JsonInput';
import SubmitButton from '../base/SubmitButton';
import BackButton from '../base/BackButton';
import ResultsTable from '../base/ResultsTable';
import {
	FOLLOWERS_FILE_UPLOAD_LABEL,
	FOLLOWINGS_FILE__UPLOAD_LABEL,
} from '../../common/Constants';

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
					<Flex width={'50vw'} gap={5}>
						<JsonInput
							files={followersFile}
							setFiles={setFollowersFile}
							label={FOLLOWERS_FILE_UPLOAD_LABEL}
						/>
						<JsonInput
							files={followingsFile}
							setFiles={setFollowingsFile}
							label={FOLLOWINGS_FILE__UPLOAD_LABEL}
						/>
					</Flex>
					<SubmitButton
						followersFile={followersFile ? followersFile[0] : null}
						followingsFile={followingsFile ? followingsFile[0] : null}
						setHappyResults={setHappyResults}
						setSadResults={setSadResults}
						setShowResults={setShowResults}
					/>
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
