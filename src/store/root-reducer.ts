import { combineReducers } from 'redux'
import catalogReducer from './reducers/catalog-reducer'

export default combineReducers ({
    catalogPage: catalogReducer,
});