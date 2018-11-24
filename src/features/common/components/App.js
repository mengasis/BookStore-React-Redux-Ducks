import React, { Component } from 'react'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import { Nav, NavItem } from 'react-bootstrap'


import menu from '../../../utils/menu'
import logo from './image/sparta.png'
import './css/App.css'


class App extends Component {

	constructor(props) {
		super(props)

		this.handleSelect = this.handleSelect.bind(this)
	}

	handleSelect(selectedItemId){
		this.props.actions.changeItemActive(selectedItemId)
	}

	render() {

		const { children, currentPage } = this.props

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Universal History Books</h1>
					<div>
						<Nav bsStyle="tabs" activeKey={currentPage} justified>
							{ menu.map(
								(item, key) => 

									key === 0 ?
										<IndexLinkContainer key={key} to={item.path} >
											<NavItem eventKey={item.id} onSelect={this.handleSelect}>{item.title}
											</NavItem>
										</IndexLinkContainer> :
										<LinkContainer key={key} to={item.path} >
											<NavItem eventKey={item.id} onSelect={this.handleSelect}>{item.title}
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
	children: PropTypes.object.isRequired,
	currentPage: PropTypes.number,
	actions: PropTypes.objectOf(PropTypes.func)
}

export default App
