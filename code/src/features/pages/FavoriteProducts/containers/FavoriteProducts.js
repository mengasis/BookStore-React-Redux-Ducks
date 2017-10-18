import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FavoriteProductsComponent from '../components/FavoriteProducts'

const mapStateToProps = (state) => {
	return {
		favorites: state.get('products').get('favorites')
	}
}

const FavoriteProductsContainer = connect(
	mapStateToProps
)(FavoriteProductsComponent)

export default FavoriteProductsContainer
