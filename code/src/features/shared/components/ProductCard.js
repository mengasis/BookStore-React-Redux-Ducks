import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Glyphicon, Button, Media, ButtonToolbar } from 'react-bootstrap'

import './ProductCard.css'

class ProductCard extends Component {

	constructor(props) {
		super(props)
		
		this.handleAddFavorite = this.handleAddFavorite.bind(this)
		this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this)
	}
	
	handleAddFavorite(e){
		e.preventDefault()
		this.props.actions.addFavorites(e.target.id)
	}

	handleRemoveFavorite(e){
		e.preventDefault()
		this.props.actions.removeFavorites(e.target.id)
	}

	render() {
		const { product, favorites } = this.props

		return (
			<div>
				<Row className="card-product">
					<Col xs={6} md={10}>
						<Media>
							<Media.Left>
								<img width={140} height={200} src={product.image} alt="Image"/>
							</Media.Left>
							<Media.Body className="list-description">
								<Media.Heading>{product.title}</Media.Heading>
								<p>{product.description}</p>
								<h3>$ {product.price}</h3>
								<ButtonToolbar>

									{ favorites.get(product.id.toString()) === 1 ?
										<Button bsStyle="danger" id={product.id} onClick={this.handleRemoveFavorite}>
											<Glyphicon glyph="bookmark" /> Quitar de Favoritos
										</Button>
										:
										<Button id={product.id} onClick={this.handleAddFavorite}>
											<Glyphicon glyph="bookmark" /> Agregar a Favoritos
										</Button>
									}
									<Button bsStyle="success">
										<Glyphicon glyph="shopping-cart" /> Comprar
									</Button>
								</ButtonToolbar>
                
							</Media.Body>
						</Media>
					</Col>
				</Row>
			</div>
		)
	}
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string
	}),
	favorites: PropTypes.object,
	actions: PropTypes.objectOf(PropTypes.func)
}

export default ProductCard