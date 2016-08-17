var React = require('react')
var PropTypes = React.PropTypes

var styles = {
    button: {
        margin:'10px'
    }
}

function getFormStyle(props) {
    return {
        display: 'flex',
        flexDirection: props.direction || 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:'300px',
        alignSelf:'right'
    }
}

function CityPrompt(props) {
    return (
        <div style={getFormStyle(props)}>
            <input className='form-control' type='text' placeholder='Rio de Janeiro, RJ'/>
            <button className='btn btn-success' type='button' style={styles.button}>Get Weather</button>
        </div>
    )
}

CityPrompt.propTypes = {
    direction: PropTypes.string.isRequired
}

module.exports = CityPrompt;
