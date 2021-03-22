import { IMovie } from '../../mock-data';

export interface ISelectProps {
	data: IMovie[];
	onChange?: (value: string) => void;
	onRender?: () => void;
}
