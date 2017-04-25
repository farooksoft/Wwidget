//This page help us to display the detailed weather report of city mentioned over a single day basis

import React, {PropTypes} from 'react';
import Day from './Day';

var convertTemp = require('../utils/utils').convertTemp;

var styles = {
  header: {
    paddingTop: 10,
    fontSize: 35,
    fontWeight: 100,
  },
  dayDetails: {
    maxWidth: 100,
    margin: '0 auto',
    textAlign: 'center',
  },
}

function CityDetails (props) {
  var getDescription = props.weather.weather[0].description;
  var getHumidity = props.weather.humidity;

  return (
    <div>
      <Day weather={props.weather}></Day>
      <h1 style={styles.header}>
        <span style={styles.dayDetails}>
          <p>City: {props.city}</p>
          <p>Climate : {getDescription}</p>
          <p>Min Temp: {convertTemp(props.weather.temp.min)}º C</p>
          <p>Max Temp: {convertTemp(props.weather.temp.max)}º C</p>
          <p>Humidity: {getHumidity}</p>
        </span>
      </h1>
    </div>
  )
}

CityDetails.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = CityDetails;
