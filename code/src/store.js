import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux-immutable'

import navigationReducer from './ducks/navigation'

const reducers = combineReducers({
	navigation: navigationReducer
})

const store = createStore(reducers, 
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store
