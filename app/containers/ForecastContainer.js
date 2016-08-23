var React = require('react')
var Forecast = require('../components/Forecast')

var ForecastContainer = React.createClass({
    render: function() {
        return <Forecast city={this.props.routeParams.city}/>
    }
})

module.exports = ForecastContainer;
