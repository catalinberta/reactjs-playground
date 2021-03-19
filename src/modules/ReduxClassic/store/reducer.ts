import { Actions } from './actions';
import { NotesState } from './types';

const initialState: NotesState = {
	notes: [],
};

export const notesReducer = (state: NotesState = initialState, action: Actions) => {
	switch (action.type) {
		case 'ADD_NOTE': {
			return { ...state, notes: [...state.notes, action.payload] };
		}
		case 'REMOVE_NOTE': {
			const notePosition = state.notes.indexOf(action.payload);
			const updatedNotes = [...state.notes];
			updatedNotes.splice(notePosition, 1);
			return { ...state, notes: updatedNotes };
		}
		default:
			return state;
	}
};
