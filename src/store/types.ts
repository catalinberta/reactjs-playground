import { AppState } from './app/types';
import { UserState } from './user/types';

export interface RootState {
	user: UserState;
	app: AppState;
}
