var React = require('react')
var PropTypes = React.PropTypes
var ProgressBar = require('react-progress-bar-plus');
require('react-progress-bar-plus/lib/progress-bar.css')
var Loading = require('./Loading')
var moment = require('moment')

var styles = {
    container: {
        textAlign: 'center'
    },
    header: {
        fontSize: '65px',
        color: '#333',
        fontWeight: '100',
        textAlign: 'center',
        marginTop: '50px',
        marginBottom: '30px'
    },
    paragrah: {
        fontSize: '30px',
        color: '#333',
        fontWeight: '100',
    },
    panel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '50px auto'
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

moment.locale(window.navigator.language)

function Day(props) {
    return (
        <div style={styles.day}>
            <img style={styles.icon}
                 src={'./app/images/weather-icons/' + props.dayData.weather[0].icon + '.svg'} alt={props.dayData.weather[0].description}/>
            <h2 style={styles.paragrah}>{moment.unix(props.dayData.dt).format('dddd, MMM DD')}</h2>
        </div>
    )
}

function Forecast(props) {
    if (props.isLoading) {
        return (
            <div>
                <ProgressBar
                    intervalTime={200}
                    autoIncrement={true}
                    percent={props.isLoading? 10: 100}
                    spinner={false} />
                <Loading text='Loading'/>
            </div>
        )
    } else {
        var days = props.forecastData.list.map(function(item, i) {
            return <Day key={i} dayData={item} />
        })
        return (
            <div>
                <div style={styles.container}>
                    <h1 style={styles.header}>{props.forecastData.city.name}, {props.forecastData.city.country}</h1>
                    <p style={styles.paragrah}>Selec a day</p>
                    <div style={styles.panel}>
                    {days}
                    </div>
                </div>
            </div>
        )
    }
}

Forecast.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
