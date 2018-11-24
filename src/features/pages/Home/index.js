import React, { Component } from 'react'

import ResponsiveImage from '../../shared/components/ResponsiveImage'
import image from './images/history.png'
class Home extends Component {
	render() {
		return (
			<div>
				<h3>Bienvenido!!</h3>
				<ResponsiveImage image={image}/>

				<p>Aquí puedes encontrar los mejores libros de historia universal, con bellas
					ilustraciones y muy sencillos de comprender. 
				</p>
				<small><strong>La historia nunca había sido tan 
				entretenida.</strong></small>
			</div>
		)
	}
}

export default Home