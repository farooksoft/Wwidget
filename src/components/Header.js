var React = require('react');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var styles = {
  nav: {
    backgroundColor: '#ff9999'
  },
  title: {
    fontSize: '30px',
    color: 'purple'
  }
}

function Header (props) {
  return (
    <div>
      <nav className="navbar navbar-default" style={styles.nav}>
        <div className="container-fluid">
          <div className="navbar-header">
            <h2 className="navbar-brand" style={styles.title}>
              Weather Forecast
            </h2>
          </div>
          <div className="nav navbar-nav navbar-right" style={styles.container}>
            <GetWeatherContainer direction="row" />
          </div>
        </div>
      </nav>
    </div>
  )
}

module.exports = Header;
