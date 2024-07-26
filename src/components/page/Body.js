import React, { useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import JsonInput from '../base/JsonInput';
import SubmitButton from '../base/buttons/SubmitButton';
import BackButton from '../base/buttons/BackButton';
import ResultsTable from '../base/ResultsTable';
import {
	FOLLOWERS_FILENAME,
	FOLLOWINGS_FILENAME,
} from '../../common/Constants';
import HelpPopup from '../base/HelpPopup';

const Body = (props) => {
	const { isOpen, onClose } = props;

	const [followersFile, setFollowersFile] = useState([]);
	const [followingsFile, setFollowingsFile] = useState([]);
	const [happyResults, setHappyResults] = useState([]);
	const [sadResults, setSadResults] = useState([]);
	const [showResults, setShowResults] = useState(false);

	return (
		<>
			<HelpPopup onClose={onClose} isOpen={isOpen} />
			<Flex
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				height='90%'
				gap={10}
			>
				{!showResults && (
					<>
						<Heading size='4xl' color='#EEEEEE'>
							Upload Here
						</Heading>
						<Flex gap={5} justifyContent='center' alignItems='center'>
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
					</>
				)}
				{showResults && (
					<>
						<Flex justifyContent='center' alignItems='center'>
							<Flex flexDirection='column' alignItems='center' padding={5} gap={5}>
								<Heading color='#EEEEEE' size='md'>
									Mutually Following 🙂
								</Heading>
								<ResultsTable results={happyResults} />
							</Flex>
							<Flex flexDirection='column' alignItems='center' padding={5} gap={5}>
								<Heading color='#EEEEEE' size='md'>
									Not following back ☹️
								</Heading>
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
		</>
	);
};

export default Body;
