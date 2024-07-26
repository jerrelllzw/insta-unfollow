import React from 'react';
import { Button } from '@chakra-ui/react';
import { readJson } from '../../common/FileUtils';
import {
	FOLLOWERS_FILENAME,
	FOLLOWINGS_FILENAME,
	INVALID_FOLLOWERS_FILE_MESSAGE,
	INVALID_FOLLOWINGS_FILE_MESSAGE,
	INVALID_JSON_FILE_MESSAGE,
} from '../../common/Constants';

const SubmitButton = (props) => {
	const {
		followersFile,
		followingsFile,
		setHappyResults,
		setSadResults,
		setShowResults,
	} = props;

	const validateFiles = () => {
		if (!followersFile || followersFile.name !== FOLLOWERS_FILENAME) {
			alert(INVALID_FOLLOWERS_FILE_MESSAGE);
			return false;
		}
		if (!followingsFile || followingsFile.name !== FOLLOWINGS_FILENAME) {
			alert(INVALID_FOLLOWINGS_FILE_MESSAGE);
			return false;
		}
		return true;
	};

	const handleOnClick = async () => {
		if (validateFiles()) {
			try {
				const [followersData, followingData] = await Promise.all([
					readJson(followersFile.file),
					readJson(followingsFile.file),
				]);

				const followers = followersData.map(
					(follower) => follower.string_list_data[0].value
				);
				const following = followingData.relationships_following.map(
					(following) => following.string_list_data[0].value
				);

				const mutualFollowing = following.filter((user) =>
					followers.includes(user)
				);
				const notFollowingBack = following.filter(
					(user) => !followers.includes(user)
				);

				setHappyResults(mutualFollowing);
				setSadResults(notFollowingBack);
				setShowResults(true);
			} catch (error) {
				alert(INVALID_JSON_FILE_MESSAGE);
			}
		}
	};

	return (
		<Button mt={6} colorScheme='green' onClick={handleOnClick}>
			Get Results
		</Button>
	);
};

export default SubmitButton;
