import types from './types'

const addFavorites = (id) => ({
	type: types.ADD_FAVORITE_PRODUCT,
	payload: id
})

const removeFavorites = (id) => ({
	type: types.REMOVE_FAVORITE_PRODUCT,
	payload: id
})

export default {
	addFavorites,
	removeFavorites
}