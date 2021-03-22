import { TextField, Typography } from '@material-ui/core';
import top100Films, { IMovie } from '@src/modules/UseCallbackAndUseMemo/mock-data';
import Select from '@src/modules/UseCallbackAndUseMemo/components/Select';
import React, { useCallback, useMemo } from 'react';
import { useStyles } from './styles';

const parseData = (data: IMovie[]) => {
	// Heavy data parsing here
	return data;
};

const DropdownHooks = () => {
	const [name, setName] = React.useState('');
	const data = useMemo(() => parseData(top100Films), []);

	console.log('Render parent');

	const onSelectChange = useCallback(() => {}, []);

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const classes = useStyles();

	return (
		<div>
			<Typography variant="h6" color="textPrimary">
				Dropdown with Hooks
			</Typography>
			<TextField className={`${classes.nameInput}`} value={name} onChange={onNameChange} placeholder="Your name" />
			<Typography variant="body1" className={`${classes.title}`}>
				Select a movie
			</Typography>
			<Select data={data} onChange={onSelectChange} />
		</div>
	);
};

export default DropdownHooks;
