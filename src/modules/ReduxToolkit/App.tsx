import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './store/types';
import { addNote } from './store/actions';
import NotesList from '@src/modules/ReduxToolkit/components/NotesList';
import { AddNoteStyled } from './styles';

function App() {
	const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes);
	const dispatch = useDispatch();

	const onAddNote = (note: string) => {
		dispatch(addNote(note));
	};

	return (
		<>
			<AddNoteStyled addNote={onAddNote} />
			<NotesList data={notes} />
		</>
	);
}

export default App;
