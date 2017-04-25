import React from 'react';
import logo from '../images/weather.png';
//import pic from '../images/pattern.svg';

//import GetWeatherContainer from '../containers/GetWeatherContainer';

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('../images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 30,
    fontAlign : 'center',
    color: '#r3214',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div>
    <center><img src={logo} className="App-logo" alt="logo" /></center><br/>
    <div style={styles.container}>
      <h1 style={styles.header}>Weather Widget</h1>
      <p>
      An Application to Display weather Forecast 
      of any specified city accross Globe for 5 continous days.</p>
      <p>[Kindly Enter your city in the Text box above]</p>
      </div>
    </div>
  )
}

module.exports = Home;
