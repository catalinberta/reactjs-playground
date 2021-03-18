import colorPalette from './color-palette';

const scTheme = {
	colors: colorPalette,
	breakpoints: {
		xs: '480px',
		sm: '768px',
		md: '992px',
		lg: '1200px',
		xl: '1600px',
		uhd: '3000px',
	},
	responsive: (breakpoint: string, type: string = 'min', orientation: string = 'width', breakpoint2: string = '') =>
		`@media (${type === 'max' ? 'max' : 'min'}-${orientation}: ${breakpoint}) ${
			type === 'between' ? `and (max-${orientation}: ${breakpoint2})` : ''
		} `,
};

export default scTheme;
