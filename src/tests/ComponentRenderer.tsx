import React, { FC } from 'react';
import store from '../store/store';
import muiTheme from '../constants/mui-theme';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/styled-components-theme';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const renderComponent = (Component: React.ReactElement) => {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={createMuiTheme(muiTheme)}>
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>{Component}</QueryClientProvider>
				</ThemeProvider>
			</MuiThemeProvider>
		</Provider>
	);
};

export default renderComponent;
