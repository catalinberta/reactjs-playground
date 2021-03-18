export interface IAddNoteProps {
	className?: string;
	addNote(note: INote): void;
}

export type INote = string;
