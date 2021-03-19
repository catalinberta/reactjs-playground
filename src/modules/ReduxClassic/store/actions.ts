import { AddNoteAction, RemoveNoteAction } from './types';

export const addNote = (note: string): AddNoteAction => ({
	type: 'ADD_NOTE',
	payload: note,
});

export const removeNote = (note: string): RemoveNoteAction => ({
	type: 'REMOVE_NOTE',
	payload: note,
});

export type Actions = AddNoteAction | RemoveNoteAction;
