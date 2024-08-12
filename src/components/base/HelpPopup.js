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
				<ModalHeader>Follow these steps 😏</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>1. Open Instagram settings and access Accounts Center</Text>
					<Text>2. Navigate to "Your information and permissions"</Text>
					<Text>3. Select "Download your information" and click "Download or transfer information"</Text>
					<Text>4. Choose "Some of your information"</Text>
					<Text>5. Check the box for "Followers and following" under the Connections section</Text>
					<Text>6. Click "Next"</Text>
					<Text>7. Choose "Download to device" and proceed</Text>
					<Text>8. For "Date range", select "All time" and for "Format", select "JSON"</Text>
					<Text>9. Click "Create files" to request your data</Text>
					<Text>10. Wait for Instagram to notify you when your data is ready for download and download the files</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default HelpPopup;
