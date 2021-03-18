import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice } from './user';
import logger from 'redux-logger';
import { appSlice } from './app';

const reducer = {
	user: userSlice.reducer,
	app: appSlice.reducer,
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});
