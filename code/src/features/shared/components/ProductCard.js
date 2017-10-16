import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Glyphicon, Button, Media, ButtonToolbar } from 'react-bootstrap'

class ProductCard extends Component {

	constructor(props) {
		super(props)
		
		this.handleFavorite = this.handleFavorite.bind(this)
	}
	
	handleFavorite(e){
		e.preventDefault()
		console.log(e.target.id)
	}

	render() {
		const { product } = this.props
		console.log(product)
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
									<Button id={product.id} onClick={this.handleFavorite}>
										<Glyphicon glyph="bookmark" /> Agregar a Favoritos
									</Button>
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
	})
}

export default ProductCard