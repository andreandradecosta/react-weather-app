var React = require('react')
var Detail = require('../components/Detail')


var DetailContainer = React.createClass({
    componentDidMount: function() {
        var city = this.props.routeParams.city
        var details = this.props.location.state.details
        console.log(city)
        console.log(details);
    },
    render: function() {
        return <Detail/>
    }
})

module.exports = DetailContainer;
