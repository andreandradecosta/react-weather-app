var React = require('react')
var CityPrompt = require('../components/CityPrompt')
var PropTypes = React.PropTypes

var CityPromptContainer = React.createClass({
    propTypes: {
        direction: PropTypes.string
    },
    getDefaultProps() {
        return {
            direction: 'column'
        }
    },
    render: function() {
        return <CityPrompt
                    direction={this.props.direction}/>
    }
})

module.exports = CityPromptContainer;
