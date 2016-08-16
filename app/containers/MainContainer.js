var React = require('react')


function MainContainer(props) {
    return (
        <div>
            <h1>MainContainer</h1>
            {props.children}
        </div>
    )
}

module.exports = MainContainer;
