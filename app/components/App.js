import React from 'react'

//App is the main component. It'll render all other components
import WeatherForm from './WeatherForm'

const App = () => (
	<div className='container'>
		<h1 className='title'>Enter city name</h1>
		<WeatherForm />	
	</div>
)

export default App