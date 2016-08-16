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
  form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth:'300px',
      alignSelf:'right'
  },
  button: {
      margin:'10px'
  }
}


function Home(props) {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Enter a City and State</h1>
            <div>
                <form style={styles.form}>
                    <input className='form-control' type='text' placeholder='Rio de Janeiro, RJ'/>
                    <button className='btn btn-success' type='button' style={styles.button}>Get Weather</button>
                </form>
            </div>
        </div>
    )
}

module.exports = Home;
