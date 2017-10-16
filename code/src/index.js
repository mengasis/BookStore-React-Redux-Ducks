import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import AppRoutes from './pages'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>
	, document.getElementById('root'))
registerServiceWorker()
