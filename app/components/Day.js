var React = require('react')
var moment = require('moment')

moment.locale(window.navigator.language)

var styles = {
    paragrah: {
        fontSize: '30px',
        color: '#333',
        fontWeight: '100',
    },
    day: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '35px'
    },
    icon: {
        height: '130px'
    }
}



function Day(props) {
    return (
        <div style={styles.day} onClick={props.handleClick}>
            <img style={styles.icon}
                 src={'./app/images/weather-icons/' + props.weather.icon + '.svg'} alt={props.weather.description}/>
            <h2 style={styles.paragrah}>{moment.unix(props.date).format('dddd, MMM DD')}</h2>
        </div>
    )
}

module.exports = Day;
