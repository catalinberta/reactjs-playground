import { objectToQueryString } from '.';

describe('Utils', () => {
	describe('objectToQueryString()', () => {
		test('It returns a query string from an object', () => {
			const object = {
				prop1: 1,
				prop2: 2,
			};
			const queryString = objectToQueryString(object);

			expect(queryString).toBe('prop1=1&prop2=2');
		});
	});
});
