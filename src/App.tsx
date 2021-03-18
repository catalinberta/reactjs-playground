import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import ClassicRedux from './modules/ReduxToolkit';
import { Container, Wrapper } from './styles';

const RootApp = () => {
	return (
		<Router>
			<AppContainer>
				<CssBaseline />
				<Header />
				<Wrapper>
					<Container>
						<Switch>
							<Route path="/">
								<ClassicRedux />
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
