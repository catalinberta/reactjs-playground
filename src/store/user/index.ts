import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from './types';

const userInitialState: UserState = {
	name: "John Doe"
};

export const userSlice = createSlice({
	name: "user",
	initialState: userInitialState,
	reducers: {
		setName: (state, {payload}: PayloadAction<string>) => {
			state.name = payload;
		}
	}
});

export const {
	setName
} = userSlice.actions;

