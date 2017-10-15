import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import menu from '../utils/menu'
import logo from './image/logo.png'
import './css/App.css'


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Project</h1>
					<ul className="App-menu">
						{ menu.map(
							(item, key) => 
								<li key={key}>
									<a href={item.path}>{item.title}</a>
								</li>
						)}
					</ul>
				</header>
      
			</div>
		)
	}
}

export default App
