import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { FormControlStyled } from './styles';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { IDropdownMenuItem, IDropdownMenuProps } from './types';
import { nanoid } from 'nanoid';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		darkMode: true,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	menuItem: {
		fontSize: 16,
	},
}));

const DropdownMenu = (props: IDropdownMenuProps) => {
	const handleChange = () => {};

	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<FormControlStyled className={classes.formControl}>
				<InputLabel id="menuItemLabel">Choose playground</InputLabel>
				<Select
					labelId="menuItemLabel"
					id="menuItem"
					value={props.data[0].id}
					onChange={handleChange}
					className={classes.selectEmpty}
				>
					{props.data.map((menuItem: IDropdownMenuItem) => {
						return (
							<MenuItem key={nanoid()} className={classes.menuItem} value={menuItem.id}>
								{menuItem.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControlStyled>
		</ThemeProvider>
	);
};

export default DropdownMenu;
