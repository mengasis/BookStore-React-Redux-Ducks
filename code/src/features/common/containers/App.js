import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppComponent from '../components/App'
import * as actions from '../../../ducks/navigation'


const mapStateToProps = (state) => {
	console.log(state)
	return {
		currentPage: state.get('navigation').get('currentPage')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions.duckActions, dispatch)
	}
}
const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent)

export default AppContainer
