import axios from 'axios'

const apiKey = 'a3e77e739d8366206136289f4d39a683'

export default {
	getWeather: (city) => {
		const apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&units=metric&APPID=' + apiKey
		return axios.get(apiCall)
			.then( (response) => {
				return response.data
			})
	}
}
