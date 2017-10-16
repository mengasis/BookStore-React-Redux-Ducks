import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from '../common/components/App'
import Home from './Home'
import ListProducts from './ListProducts'
import FavoriteProducts from './FavoriteProducts'

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/listProducts" component={ListProducts} />
			<Route path="/favoriteProducts" component={FavoriteProducts} />
		</Switch>
	</App>

export default AppRoutes