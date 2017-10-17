import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'

import types from './types'

const initialState = fromJS({
	products: {
		favorites: List([])
	}
})

const favoritesReducer = (state = initialState.get('products').get('favorites'), action = {}) => {
	switch (action.type) {
	case types.ADD_FAVORITE_PRODUCT:     
		return state.insert(action.payload)
	case types.REMOVE_FAVORITE_PRODUCT:
		return state.delete(action.payload)
	default:
		return state
	}
}

export default combineReducers({
	favorites: favoritesReducer
})
