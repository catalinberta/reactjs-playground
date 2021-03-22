import { TextField, Typography } from '@material-ui/core';
import top100Films, { IMovie } from '@src/modules/UseCallbackAndUseMemo/mock-data';
import Select from '@src/modules/UseCallbackAndUseMemo/components/Select';
import React from 'react';
import { useStyles } from './styles';

const parseData = (data: IMovie[]) => {
	// Heavy data parsing here
	return data;
};

const DropdownSimple = () => {
	const [name, setName] = React.useState('');
	const data = parseData(top100Films);

	console.log('Render parent');

	const onSelectChange = () => {};

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const classes = useStyles();

	return (
		<div>
			<Typography variant="h6" color="textPrimary">
				Dropdown Simple
			</Typography>
			<TextField className={`${classes.nameInput}`} value={name} onChange={onNameChange} placeholder="Your name" />
			<Typography variant="body1" className={`${classes.title}`}>
				Select a movie
			</Typography>
			<Select data={data} onChange={onSelectChange} />
		</div>
	);
};

export default DropdownSimple;
