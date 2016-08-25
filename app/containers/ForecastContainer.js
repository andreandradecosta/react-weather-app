var React = require('react')
var Forecast = require('../components/Forecast')
var api = require('../helpers/api')


var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
        api.getForecast(city)
        .then(function(data) {
            this.setState({
                isLoading: false,
                forecastData: data
            })
        }.bind(this))
    },
    handleDaySelection: function(dayData) {
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                details: dayData
            }
        })
    },
    render: function() {
        return <Forecast
                    forecastData={this.state.forecastData}
                    isLoading={this.state.isLoading}
                    onDaySelected={this.handleDaySelection}/>
    }
})

module.exports = ForecastContainer;
