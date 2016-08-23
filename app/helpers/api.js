var axios = require('axios')

var url = 'http://api.openweathermap.org/data/2.5'
var api_key = ''

function openWeatherCurrent(city) {
    return axios.get(url + '/weather', {
        params: {
            q: city,
            type: 'accurate',
            APPID: api_key
        }
    })
}

function openWeatherForecast(city) {
    return axios.get(url + '/forecast/daily', {
        params: {
            q: city,
            type: 'accurate',
            cnt: '5',
            APPID: api_key
        }
    })
}

var api = {
    getCurrentWeather: function(city) {
        return openWeatherCurrent(city)
            .then(function(response) {
                return response.data
            })
            .catch(function (error) {
                console.warn('Error in getCurrentWeather', error);
            })
    },

    getForecast: function(city) {
        return openWeatherForecast(city)
            .then(function(response) {
                return response.data
            })
            .catch(function(error) {
                console.warn('Error in getForecast', error);
            })
    }
}

module.exports = api
