import rootReducer from './root-reducer';
import { createStore } from 'redux';

const initialState = {}

let store = createStore(
    rootReducer,
    initialState
);

// @ts-ignore
window.store = store;

export default store;