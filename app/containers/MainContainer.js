var React = require('react')
var CityPromptContainer = require('./CityPromptContainer')

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(252, 90, 44, 0.89)',
        color: '#fff',
        padding: '5px'
    },
    title : {
        margin: '0'
    }
}

function MainContainer(props) {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>React Weather App</h2>
                <CityPromptContainer direction='row'/>
            </div>
            {props.children}
        </div>
    )
}

module.exports = MainContainer;
