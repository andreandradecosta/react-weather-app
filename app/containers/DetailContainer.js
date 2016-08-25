var React = require('react')
var Detail = require('../components/Detail')


var DetailContainer = React.createClass({
    componentDidMount: function() {
        var city = this.props.routeParams.city
        var details = this.props.location.state.details
    },
    render: function() {
        return <Detail
                    city={this.props.routeParams.city}
                    details={this.props.location.state.details}
                    />
    }
})

module.exports = DetailContainer;
