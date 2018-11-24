import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import './index.css'
import AppRoutes from './features/pages'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'))
registerServiceWorker()
