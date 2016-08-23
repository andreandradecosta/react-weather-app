var React = require('react')
var CityPrompt = require('../components/CityPrompt')
var PropTypes = React.PropTypes
var api = require('../helpers/api')

var CityPromptContainer = React.createClass({
    propTypes: {
        direction: PropTypes.string
    },
    getDefaultProps: function() {
        return {
            direction: 'column'
        }
    },
    getInitialState: function() {
        return {
            city: 'rio de janeiro, rj'
        }
    },
    handleUpdateCity: function(e) {
        this.setState({
            city: e.target.value
        })
    },
    handleQuery: function(e) {
        api.getCurrentWeather(this.state.city)
            .then(function(data) {
                console.log(data);
            })
    },
    render: function() {
        return <CityPrompt
                    city={this.state.city}
                    direction={this.props.direction}
                    onUpdateCity={this.handleUpdateCity}
                    onSubmitQuery={this.handleQuery}/>
    }
})

module.exports = CityPromptContainer;
