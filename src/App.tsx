import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@src/components/Header';
import ReduxClassic from '@src/modules/ReduxClassic';
import ReduxToolkit from '@src/modules/ReduxToolkit';
import { Container, Wrapper } from './styles';
import RoutePaths from './constants/route-paths';
import UseCallbackAndUseMemo from './modules/UseCallbackAndUseMemo';

const RootApp = () => {
	return (
		<Router>
			<AppContainer>
				<CssBaseline />
				<Header />
				<Wrapper>
					<Container>
						<Switch>
							<Route path={RoutePaths.ReduxClassic} exact>
								<ReduxClassic />
							</Route>
							<Route path={RoutePaths.ReduxToolkit}>
								<ReduxToolkit />
							</Route>
							<Route path={RoutePaths.UseCallbackAndUseMemo}>
								<UseCallbackAndUseMemo />
							</Route>
						</Switch>
					</Container>
				</Wrapper>
			</AppContainer>
		</Router>
	);
};

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px 1fr;
	grid-gap: 0;
`;

export default RootApp;
