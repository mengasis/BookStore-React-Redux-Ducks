import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import types from './types'

const initialState = fromJS({
	navigation: {
		currentPage: 0
	}
})

const currentPageReducer = (state = initialState.get('navigation').get('currentPage'), action = {}) => {
	switch (action.type) {
	case types.SELECTED_ITEM:     
		return action.payload
	default:
		return state
	}
}

export default combineReducers({
	currentPage: currentPageReducer
})
