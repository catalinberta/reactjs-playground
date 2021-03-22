import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import theme from '@src/constants/styled-components-theme';
import muiTheme from '@src/constants/mui-theme';
import UseCallbackAndUseMemoApp from './App';

function UseCallbackAndUseMemo() {
	return (
		<MuiThemeProvider theme={createMuiTheme(muiTheme)}>
			<ScThemeProvider theme={theme}>
				<UseCallbackAndUseMemoApp />
			</ScThemeProvider>
		</MuiThemeProvider>
	);
}

export default UseCallbackAndUseMemo;
