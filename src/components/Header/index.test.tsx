import React from 'react';
import { render } from '@testing-library/react';
import Header from './';
import renderComponent from '../../tests/ComponentRenderer';

describe('Header Component', () => {
	test('Snapshot', () => {
		const { asFragment } = render(renderComponent(<Header />));

		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders Logo', () => {
		const { getByTestId } = render(renderComponent(<Header />));
		const headerLogo = getByTestId('logo');

		expect(headerLogo).toBeDefined();
	});
});
