import { INote } from '../components/AddNote/types';

export interface NotesState {
	notes: INote[];
}

export type AddNoteAction = { type: 'ADD_NOTE'; payload: INote };
export type RemoveNoteAction = { type: 'REMOVE_NOTE'; payload: INote };
