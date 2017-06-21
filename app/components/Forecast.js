import React from 'react'
import queryString from 'query-string'
import api from '../utils/api'
//This component will render the page with 5-day weather forecast for selected city

export default class Forecast extends React.Component {

	constructor (props) {
		super (props)
		this.state = {
			error: null,
			cityName: '',
			temp: null,
			temp_max: null,
			temp_min: null,
			humidity: null
		}
	}

	componentDidMount () {
		let query = queryString.parse(this.props.location.search)
		api.getWeather(query.city)
			.then( (results) => {
				if (results === null) {
					return this.setState( () => {
						return { error: 'Error fetching data from API. Wait 10 minutes and try again.'}
					})
				}
				this.setState( () => {
					console.log(results)
					return {
						error: null,
						cityName: results.name,
						temp: results.main.temp,
						temp_max: results.main.temp_max,
						temp_min: results.main.temp_min,
						humidity: results.main.humidity,
					}
				})
			});
	}

	render () {
		return (
			<div>
				<ul>
					<li>Query String: {this.props.location.search}</li>
					<li>City: {this.state.cityName}</li>
					<li>Temperature: {this.state.temp}</li>
					<li>Max Temperature: {this.state.temp_max}</li>
					<li>Min Temperature: {this.state.temp_min}</li>
					<li>Humidity: {this.state.humidity}</li>
				</ul>
			</div>
		)
	}
}