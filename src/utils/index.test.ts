import { convertRatioToPercentage, mapProductsToType, objectToQueryString } from '.';
import campaignProducts from '../tests/mock-data/campaign-products';

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

	describe('mapProductsToType()', () => {
		test('It returns an object with categorized products', () => {
			const categorizedProducts = mapProductsToType(campaignProducts);

			expect(Object.keys(categorizedProducts).length).toBe(4);
		});
	});

	describe('convertRatioToPercentage()', () => {
		test('It returns a string that repersents the percentage from a given ratio', () => {
			const percentageValue1 = convertRatioToPercentage(0.63);
			expect(percentageValue1).toBe('63.00%');

			const percentageValue2 = convertRatioToPercentage(0.417899);
			expect(percentageValue2).toBe('41.79%');

			const percentageValueWithMoreDecimals = convertRatioToPercentage(0.21780322, 4);
			expect(percentageValueWithMoreDecimals).toBe('21.7803%');
		});
	});
});
