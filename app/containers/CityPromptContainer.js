var React = require('react')
var CityPrompt = require('../components/CityPrompt')
var PropTypes = React.PropTypes

var CityPromptContainer = React.createClass({
    propTypes: {
        direction: PropTypes.string
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
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
        this.context.router.push("/forecast/" + this.state.city)
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
