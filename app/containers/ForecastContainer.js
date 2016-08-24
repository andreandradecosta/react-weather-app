var React = require('react')
var Forecast = require('../components/Forecast')
var api = require('../helpers/api')


var ForecastContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            forecastData: {}
        }
    },
    componentDidMount: function() {
        this.queryData(this.props.routeParams.city)
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            isLoading: true,
        })
        this.queryData(nextProps.routeParams.city)
    },
    queryData: function(city) {
        api.getCurrentWeather(city)
        .then(function(data) {
            console.log(data);
            this.setState({
                isLoading: false,
                forecastData: data
            })
        }.bind(this))
    },
    render: function() {
        return <Forecast
                    forecastData={this.state.forecastData}
                    isLoading={this.state.isLoading} />
    }
})

module.exports = ForecastContainer;
