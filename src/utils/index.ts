export const objectToQueryString = <REQUEST extends Record<string, any>>(object: REQUEST): string => {
	return Object.keys(object)
		.map((key) => key + '=' + object[key])
		.join('&');
};

export function convertRatioToPercentage(number: number, decimals?: number): string {
	return (number * 100).toFixed(decimals || 2) + '%';
}
