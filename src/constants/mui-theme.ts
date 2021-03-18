import { ThemeOptions } from '@material-ui/core';
import colorPalette from './color-palette';

let muiTheme: ThemeOptions = {
	typography: {
		htmlFontSize: 10,
		fontFamily: 'Lato, Ubuntu, Arial',
		allVariants: {
			fontFamily: 'Ubuntu',
		},
		h1: {
			fontSize: '2.4rem',
			fontWeight: 'bold',
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 'bold',
		},
	},
	palette: {
		...colorPalette,
		text: {
			primary: colorPalette.black.main,
		},
	},
};

export default muiTheme;
