import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { FormControlStyled } from './styles';
import { createMuiTheme, makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { IDropdownMenuProps } from './types';
import { nanoid } from 'nanoid';
import muiTheme from '@src/constants/mui-theme';
import scTheme from '@src/constants/styled-components-theme';
import React, { useState } from 'react';
import modules from '@src/constants/modules';

const theme = createMuiTheme({
	...muiTheme,
	palette: {
		...muiTheme.palette,
		type: 'dark',
	},
});

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		color: '#fff',
	},
	selectedEmpty: {
		color: '#fff',
	},
	menuItem: {
		color: scTheme.colors.text.dark,
		padding: theme.spacing(1),
	},
}));

const DropdownMenu = (props: IDropdownMenuProps) => {
	const [selected, setSelected] = useState(modules.reduxClassic.id);

	const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		const selectedValue = event.target.value as string;
		setSelected(selectedValue);
		props.onChange?.(selectedValue);
	};

	const classes = useStyles();

	return (
		<MuiThemeProvider theme={theme}>
			<FormControlStyled className={classes.formControl}>
				<InputLabel id="menuItemLabel">Choose playground</InputLabel>
				<Select value={modules[selected].id} onChange={handleChange} className={`${classes.selectedEmpty}`}>
					{Object.keys(modules).map((moduleName) => {
						return (
							<MenuItem
								key={nanoid()}
								value={modules[moduleName].id}
								className={`${classes.menuItem}`}
								selected={selected === modules[moduleName].id}
							>
								{modules[moduleName].name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControlStyled>
		</MuiThemeProvider>
	);
};

export default DropdownMenu;
