const useTimeToRead = (content: string) => {
	const calculateTimeToRead = () => {
		const wordsPerMinute = 200;
		const textLength = content.split(' ').length;

		if (textLength > 0) {
			let value = Math.ceil(textLength / wordsPerMinute);
			return `${value} min read`;
		}

		return '';
	};

	return {
		timetoRead: calculateTimeToRead()
	};
};

export default useTimeToRead;
