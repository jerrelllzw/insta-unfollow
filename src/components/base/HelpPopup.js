import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
} from '@chakra-ui/react';

const HelpPopup = (props) => {
	const { onClose, isOpen } = props;

	return (
		<Modal onClose={onClose} isOpen={isOpen} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Follow these steps :)</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>1. request data from instagram</Text>
					<Text>2. download data when ready</Text>
					<Text>3. extract the follower and followers_1 file from the zip</Text>
					<Text>4. upload them into the dropzones above</Text>
					<Text>5. press get results!</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default HelpPopup;
