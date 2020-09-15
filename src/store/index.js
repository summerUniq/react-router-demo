import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(combineReducers({userReducer}), applyMiddleware(logger, thunk))

export default store