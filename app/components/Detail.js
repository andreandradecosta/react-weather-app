var React = require('react')
var Day = require('./Day')

var styles = {
    details: {
        fontSize: '34px',
        fontWeight: '100',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center'
    }
}

function toF(kelvin) {
    return parseInt(((kelvin - 273.15) * 1.8000 + 32.00), 10)
}


function Detail(props) {
    return (
        <div>
            <Day date={props.details.dt} weather={props.details.weather[0]}/>
            <div style={styles.details}>
                <p>{props.city}</p>
                <p>{props.details.weather[0].description}</p>
                <p><span>min temp: </span><span>{toF(props.details.temp.min)}</span><span> degrees</span></p>
                <p><span>max temp: </span><span>{toF(props.details.temp.max)}</span><span> degrees</span></p>
                <p><span>humidity: </span><span>{props.details.humidity}</span></p>
            </div>
        </div>
    )
}


module.exports = Detail
