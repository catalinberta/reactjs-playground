import modules from '@src/constants/modules';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';
import { Container, Logo, Wrapper } from './styles';

const Header = (): React.ReactElement => {
	const history = useHistory();

	const onModuleChange = (value: any) => {
		history.push(modules[value].routePath);
	};

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
