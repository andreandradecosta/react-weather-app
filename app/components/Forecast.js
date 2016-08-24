var React = require('react')
var PropTypes = React.PropTypes

function Forecast(props) {
    return props.isLoading === true
        ? <div>Loading...</div>
        : <div>Forecast for {props.forecastData.name}</div>
}

Forecast.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
