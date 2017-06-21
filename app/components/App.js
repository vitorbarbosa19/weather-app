import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
//App is the main component. It'll render all other components
import WeatherForm from './WeatherForm'
import Forecast from './Forecast'

const App = () => (
	<Router>
		<div className='container'>
			<Switch>
				<Route exact path='/' component={WeatherForm} />
				<Route path='/' component={Forecast} />
				{/*default route. Will render when none of the above match (404). Only works inside a Switch component*/}
				<Route render={() => (<p>Not found</p>)} />
			</Switch>
		</div>
	</Router>
)

export default App