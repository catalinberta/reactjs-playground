import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { store } from '@src/modules/ReduxClassic/store';
import theme from '@src/constants/styled-components-theme';
import muiTheme from '@src/constants/mui-theme';
import ReduxClassicApp from './App';

const queryClient = new QueryClient();

function ReduxClassic() {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={createMuiTheme(muiTheme)}>
				<ScThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<ReduxClassicApp />
					</QueryClientProvider>
				</ScThemeProvider>
			</MuiThemeProvider>
		</Provider>
	);
}

export default ReduxClassic;
