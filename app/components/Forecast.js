var React = require('react')
var PropTypes = React.PropTypes
var ProgressBar = require('react-progress-bar-plus');
require('react-progress-bar-plus/lib/progress-bar.css')
var Loading = require('./Loading')

function Forecast(props) {
    return (
        <div>
                <ProgressBar
                    intervalTime={200}
                    autoIncrement={true}
                    percent={props.isLoading? 10: 100}
                    spinner={false} />
                {!!props.isLoading && <Loading text='Loading'/>}
                {props.isLoading || <div>Forecast for {props.forecastData.name}</div>}
        </div>
    )
}

Forecast.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
