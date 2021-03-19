import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { notesSlice } from './notes';

const reducer = {
	notes: notesSlice.reducer,
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});
