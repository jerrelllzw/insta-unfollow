import { useToast } from '@chakra-ui/react';

export const useToastUtils = () => {
	const toast = useToast();

	const showToast = (title, status) => {
		toast({
			title,
			status,
			duration: 3000,
			isClosable: true,
		});
	};

	return showToast;
};
