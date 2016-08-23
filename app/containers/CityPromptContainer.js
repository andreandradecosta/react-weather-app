var React = require('react')
var CityPrompt = require('../components/CityPrompt')
var PropTypes = React.PropTypes

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
            city: ''
        }
    },
    handleUpdateCity: function(e) {
        this.setState({
            city: e.target.value
        })
    },
    handleQuery: function(e) {
        console.log(this.state.city);
    },
    render: function() {
        return <CityPrompt
                    direction={this.props.direction}
                    onUpdateCity={this.handleUpdateCity}
                    onSubmitQuery={this.handleQuery}/>
    }
})

module.exports = CityPromptContainer;
