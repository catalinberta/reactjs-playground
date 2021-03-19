import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/types';
import { addNote } from './store/actions';
import { AddNoteStyled, Container } from './styles';
import NotesList from '@src/modules/ReduxClassic/components/NotesList';
import React from 'react';
import { Typography } from '@material-ui/core';

const ReduxClassicApp = (): React.ReactElement => {
	const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes);
	const dispatch = useDispatch();

	const onAddNote = (note: string): void => {
		dispatch(addNote(note));
	};

	return (
		<Container>
			<Typography variant="h1" color="textPrimary">
				Redux Classic Implementation
			</Typography>
			<AddNoteStyled addNote={onAddNote} />
			<NotesList data={notes} />
		</Container>
	);
};

export default ReduxClassicApp;
