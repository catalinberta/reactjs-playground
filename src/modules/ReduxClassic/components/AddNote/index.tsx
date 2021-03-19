import React, { ChangeEvent } from 'react';
import { Button } from '@material-ui/core';
import { Container, Input } from './styles';
import { IAddNoteProps } from './types';

const AddNote: React.FC<IAddNoteProps> = (props) => {
	const [note, setNote] = React.useState('');

	const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const onAddNoteClick = () => {
		if (!note) return;
		props.addNote(note);
		setNote('');
	};

	return (
		<Container className={props.className}>
			<Input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
			<Button onClick={onAddNoteClick} variant="contained" color="primary">
				Add note
			</Button>
		</Container>
	);
};

export default AddNote;
