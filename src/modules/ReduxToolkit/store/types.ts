import { INote } from '../components/AddNote/types';

export interface NotesState {
	notes: INote[];
}

export interface RootState {
	notes: NotesState;
}
