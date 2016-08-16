var React = require('react')

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}


function Home(props) {
    return (
        <div style={styles.container}>
            <h1>Enter a City and State</h1>
            <form>
                <input type='text' placeholder='Rio de Janeiro, RJ'/>
                <button type='button'>Get Weather</button>
            </form>
        </div>
    )
}

module.exports = Home;
