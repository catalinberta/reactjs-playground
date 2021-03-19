import modules from '@src/constants/modules';
import RoutePaths from '@src/constants/route-paths';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import { Container, Logo, Wrapper } from './styles';

const Header = (): React.ReactElement => {
	const history = useHistory();

	const onModuleChange = (value: string) => {
		history.push(modules[value].routePath);
	};

	useEffect(() => {
		history.push(RoutePaths.ReduxClassic);
	}, [history]);

	return (
		<Wrapper>
			<Container>
				<Logo data-testid="logo" />
				<DropdownMenu onChange={onModuleChange} />
			</Container>
		</Wrapper>
	);
};

export default Header;
