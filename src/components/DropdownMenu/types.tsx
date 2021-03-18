export interface IDropdownMenuItem {
	id: string;
	name: string;
}

export interface IDropdownMenuProps {
	data: IDropdownMenuItem[];
	onChange: (moduleId: string) => void;
}
