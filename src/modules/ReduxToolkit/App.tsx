import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/types';
import { addNote } from './store/notes';
import { AddNoteStyled, Container } from './styles';
import NotesList from '@src/modules/ReduxToolkit/components/NotesList';
import React from 'react';
import { Typography } from '@material-ui/core';
import { INote } from '../ReduxClassic/components/AddNote/types';
import { RootState } from '@src/modules/ReduxToolkit/store/types';

const ReduxToolkitApp = (): React.ReactElement => {
	const notesState = useSelector<RootState, NotesState>((state) => state.notes);
	const dispatch = useDispatch();

	const onAddNote = (note: INote): void => {
		dispatch(addNote(note));
	};

	return (
		<Container>
			<Typography variant="h1" color="textPrimary">
				Redux Toolkit Implementation
			</Typography>
			<AddNoteStyled addNote={onAddNote} />
			<NotesList data={notesState.notes} />
		</Container>
	);
};

export default ReduxToolkitApp;
