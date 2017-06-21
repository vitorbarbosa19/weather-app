import React from 'react'
import { 
	Link,
	Redirect
} from 'react-router-dom'
//This component will render the input form so the user can select which city to get the weather from

export default class WeatherForm extends React.Component {
	
	constructor (props) {
		super (props)
		this.state = {
			city: '',
			redirect: false
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

	handleFormSubmission (event) {
		event.preventDefault()
		this.setState( { redirect: true } )
	}

	render () {
		return (
			<div>
				<form className='weatherForm' onSubmit={this.handleFormSubmission.bind(this)}>
					<h1 className='title'>Enter city name</h1>
					<input className='cityInput' type='text' onChange={this.handleInputChange.bind(this)} value={this.state.city}/>
					<button className='weatherBtn' type='submit'>Get the weather!</button>
				</form>
				{this.state.redirect && (
					<Redirect 
						to ={{
							pathname: this.props.match.url + 'forecast',
							search: '?city=' + this.state.city
						}} />
				)}
			</div>
		)
	}
}