import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from './types';

const appInitialState: AppState = {
	currentCampaignId: null,
	showSidePanel: false,
};

export const appSlice = createSlice({
	name: 'user',
	initialState: appInitialState,
	reducers: {
		showSidePanel: (state, { payload }: PayloadAction<string>) => {
			state.showSidePanel = !!payload;
			state.currentCampaignId = payload;
		},
		hideSidePanel: (state) => {
			state.showSidePanel = false;
		},
	},
});

export const { showSidePanel, hideSidePanel } = appSlice.actions;
