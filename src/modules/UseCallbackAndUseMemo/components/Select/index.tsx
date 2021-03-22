import { FormControl, MenuItem, Select as MuiSelect } from '@material-ui/core';
import { nanoid } from 'nanoid';
import React from 'react';

import { useStyles } from './styles';
import { ISelectProps } from './types';

const Select = (props: ISelectProps) => {
	const [selected, setSelected] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const value = event.target.value as string;
		setSelected(value);
		props.onChange?.(value);
	};

	console.log('Render child');

	const classes = useStyles();

	return (
		<FormControl className={`${classes.formControl}`}>
			<MuiSelect variant="outlined" className={`${classes.select}`} value={selected} onChange={handleChange}>
				{props.data.map((item) => {
					console.log('Render each select item');
					return (
						<MenuItem key={nanoid()} value={item.title}>
							{item.title}
						</MenuItem>
					);
				})}
			</MuiSelect>
		</FormControl>
	);
};

export default React.memo(Select);
