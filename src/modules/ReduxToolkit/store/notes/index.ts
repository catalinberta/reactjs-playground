import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '@src/modules/ReduxToolkit/components/AddNote/types';

import { NotesState } from './types';

const notesInitialState: NotesState = {
	notes: [],
};

export const notesSlice = createSlice({
	name: 'notes',
	initialState: notesInitialState,
	reducers: {
		addNote: (state, { payload }: PayloadAction<INote>) => {
			state.notes.push(payload);
		},
		removeNote: (state, { payload }: PayloadAction<INote>) => {
			state.notes.splice(state.notes.indexOf(payload), 1);
		},
	},
});

export const { addNote, removeNote } = notesSlice.actions;
