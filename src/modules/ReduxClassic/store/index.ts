import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { notesReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger];
const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(notesReducer, composeWithDevTools(middlewareEnhancer));
