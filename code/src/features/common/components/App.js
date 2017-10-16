import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'


import menu from '../../../utils/menu'
import logo from './image/sparta.png'
import './css/App.css'


class App extends Component {
	render() {

		const { children } = this.props

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Universal History Books</h1>
					<div>
						<Nav bsStyle="tabs" justified>
							{ menu.map(
								(item, key) => 
									<LinkContainer key={key} to={item.path}>
										<NavItem>{item.title}
										</NavItem>
									</LinkContainer>
							)}
						</Nav>
					</div>
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
