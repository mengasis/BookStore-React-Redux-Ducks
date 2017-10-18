import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import image from './images/history.png'
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Bienvenido!!</h1>
				<Image src={image}/>
				
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