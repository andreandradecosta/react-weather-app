var React = require('react')

var styles = {
    container: {
        width: '100%',
        height: '92%'
    }
}

function MainContainer(props) {
    return (
        <div style={styles.container}>
            <h1>MainContainer</h1>
            {props.children}
        </div>
    )
}

module.exports = MainContainer;
