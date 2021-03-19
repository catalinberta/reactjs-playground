export interface IDropdownMenuItem {
	id: string;
	name: string;
}

export interface IDropdownMenuProps {
	onChange: (moduleId: string) => void;
}
