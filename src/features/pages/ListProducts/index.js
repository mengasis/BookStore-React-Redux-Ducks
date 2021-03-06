import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import products from '../../../utils/products'
import ProductCard from '../../shared/containers/ProductCard'

class ListProducts extends Component {
	render() {

		return (
			<div>
				<Grid>
					{ products
						.map((value, key) => 
							<ProductCard key={key} product={value}/> 
						)
					}
				</Grid>
			</div>
		)
	}
}

export default ListProducts