var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Hello React!</h2>
            </div>
        )
    }
})

var Hello2 = function(props) {
    return (
        <div>
          <h3>Hello {props.text}</h3>
        </div>
    )
}

ReactDOM.render(
    <Hello2 text="!!!"/>,
    document.getElementById('app')
)
