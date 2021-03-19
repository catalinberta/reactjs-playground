import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import { INotesListProps } from './types';
import { listStyles } from './styles';
import { nanoid } from 'nanoid';
import { INote } from '../AddNote/types';
import { useDispatch } from 'react-redux';
import { removeNote } from '@src/modules/ReduxToolkit/store/notes';

const NotesList = (props: INotesListProps) => {
	const dispatch = useDispatch();
	const useListStyles = listStyles();

	const onDeleteNote = (note: INote) => {
		dispatch(removeNote(note));
	};

	return (
		<List className={`${useListStyles.root}`} dense={true}>
			{props.data.map((note: string) => {
				return (
					<ListItem key={nanoid()} ContainerProps={{ className: useListStyles.listItem }}>
						<ListItemAvatar>
							<Avatar>
								<ListIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={note} />
						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete" onClick={onDeleteNote.bind(null, note)}>
								<DeleteIcon color="error" />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};

export default NotesList;
