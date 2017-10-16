import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

import image from './images/history.png'
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Bienvenido!!</h1>
				<Image src={image}/>
				
				<p>Aquí puedes encontrar los mejores libros de historia del mundo con bellas
					ilustraciones y muy simple de entender. 
				</p>
				<small><strong>La historia nunca habia sido tan 
				entretenida.</strong></small>
			</div>
		)
	}
}

Home.propTypes = {

}

export default Home