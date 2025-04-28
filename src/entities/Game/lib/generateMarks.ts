export const generateMarks = Array.from({ length: 11 }, (_, index) => {
	const value = index * 10;

	return {
		value,
		label: value === 0 || value === 100 ? `${value}` : '',
	};
});