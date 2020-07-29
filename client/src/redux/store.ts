import { createStore, combineReducers } from 'redux';
import catalogReducer from './catalog-reducer'

let rootReducer = combineReducers({
    catalogPage: catalogReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


const store = createStore(rootReducer);

// @ts-ignore
window.__store__ = store;

export default store;