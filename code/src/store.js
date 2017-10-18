import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'


import navigationReducer from './ducks/navigation'
import productsReducer from './ducks/products'
import { loadState, saveState } from './utils/localStorage'

const reducers = combineReducers({
	navigation: navigationReducer,
	products: productsReducer
})

const persistedState = loadState()

const store = createStore(
	reducers,
	fromJS(persistedState),
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

store.subscribe(() => {
	saveState(store.getState())
})

export default store
