import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, Glyphicon, Button, Media, ButtonToolbar } from 'react-bootstrap'

import './ListProducts.css'
import products from '../../utils/products'

class ListProducts extends Component {
	render() {

		return (
			<div>
				<Grid>
					{ products
						.map((value, key) => 
							<Row key={key} className="card-product">
								<Col xs={6} md={10}>
									<Media>
										<Media.Left>
											<img width={140} height={200} src={value.image} alt="Image"/>
										</Media.Left>
										<Media.Body className="list-description">
											<Media.Heading>{value.title}</Media.Heading>
											<p>{value.description}</p>
											<h3>$ {value.price}</h3>
											<ButtonToolbar>
												<Button>
													<Glyphicon glyph="star" /> Like
												</Button>
												<Button>
													<Glyphicon glyph="star" /> Comprar
												</Button>
											</ButtonToolbar>
									
										</Media.Body>
									</Media>
								</Col>
							</Row>
						)
					}
				</Grid>
			</div>
		)
	}
}

ListProducts.propTypes = {

}

export default ListProducts