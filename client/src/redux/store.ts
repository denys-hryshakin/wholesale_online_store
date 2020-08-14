import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer from './catalog-reducer'

let rootReducer = combineReducers({
    catalogPage: catalogReducer,
})

const initialState = {};
const middleware = [thunk];

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// @ts-ignore
window.__store__ = store;

export default store;