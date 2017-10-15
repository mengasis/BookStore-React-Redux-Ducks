import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import menu from '../utils/menu'
import logo from './image/logo.png'
import './css/App.css'


class App extends Component {
	render() {

		const { children } = this.props

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Project</h1>
					<ul className="App-menu">
						{ menu.map(
							(item, key) => 
								<li key={key}>
									<Link to={item.path}>{item.title}</Link>
								</li>
						)}
					</ul>
				</header>

				<div className="Content">
					{children}
				</div>
      
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
