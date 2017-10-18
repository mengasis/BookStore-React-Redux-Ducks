import types from './types'

const changeItemActive = (id) => ({
	type: types.SELECTED_ITEM,
	payload: id
})

export default {
	changeItemActive
}