import React from 'react'

//This is the main component. It'll render all other components

export default class WeatherForm extends React.Component {
	
	constructor (props) {
		super (props)
		this.state = {
			city: ''
		}
	}

	handleInputChange (event) {
		
		let value = event.target.value
		this.setState( () => {
			return {
				city: value
			}
		})
	}

	render () {
		return (
			<form className='weatherForm'>
				<input className='cityInput' type='text' onChange={this.handleInputChange.bind(this)} value={this.state.city}/>
				<button className='weatherBtn' type='submit'>Get the weather!</button>
			</form>
		)
	}
}