import React from 'react';
import DropdownMenu from '../DropdownMenu';
import { IDropdownMenuItem } from '../DropdownMenu/types';
import { Container, Logo, Wrapper } from './styles';

const moduleList: IDropdownMenuItem[] = [
	{
		id: 'reduxToolkit',
		name: 'Redux Toolkit + notes app',
	},
	{
		id: 'reactQueryImdbApi',
		name: 'react-query + GitHub Api',
	},
];

const Header = (): React.ReactElement => {
	const onModuleChange = (moduleId: string) => {
		console.log('changed module', moduleId);
	};

	return (
		<Wrapper>
			<Container>
				<Logo data-testid="logo" />
				<DropdownMenu data={moduleList} onChange={onModuleChange} />
			</Container>
		</Wrapper>
	);
};

export default Header;
