import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

import './ResponsiveImage.css'

class ResponsiveImage extends Component {

	render() {

		const { image } = this.props        

		return (
			<Image className="image-center" src={image} responsive/>
		)
	}
}

ResponsiveImage.propTypes = {
	image: PropTypes.string
}

export default ResponsiveImage