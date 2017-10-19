import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductCardComponent from '../components/ProductCard'
import * as actions from '../../../ducks/products'


const mapStateToProps = (state) => {
	return {
		favorites: state.get('products').get('favorites')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions.duckActions, dispatch)
	}
}
const ProductCardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductCardComponent)

export default ProductCardContainer
