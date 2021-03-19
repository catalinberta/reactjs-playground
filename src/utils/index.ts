export const objectToQueryString = <REQUEST extends Record<string, any>>(object: REQUEST): string => {
	return Object.keys(object)
		.map((key) => key + '=' + object[key])
		.join('&');
};
