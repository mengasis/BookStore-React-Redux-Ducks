import { combineReducers } from 'redux-immutable'
import { fromJS, Map as map } from 'immutable'

import types from './types'

const initialState = fromJS({
	products: {
		favorites: {}
	}
})

const favoritesReducer = (state = initialState.get('products').get('favorites'), action = {}) => {
	switch (action.type) {
	case types.ADD_FAVORITE_PRODUCT: 
		return state.set(action.payload, 1)

	case types.REMOVE_FAVORITE_PRODUCT:{
		return state.set(action.payload, 0)
	}
	default:
		return state
	}
}

export default combineReducers({
	favorites: favoritesReducer
})
