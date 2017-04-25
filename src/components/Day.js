import React, {PropTypes} from 'react';
import utils from '../utils/utils';


var styles = {
  container: {
    minWidth: 207,
    margin: 30,
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'center',
  },
  body: {
    paddingTop: 10,
    fontSize: 29,
    fontWeight: 100,
  },
  image: {
    width: 40,
    height: 50,
  }
}

function Day (props) {
  var icon = props.weather.weather[0].icon;
  console.log(icon);
  var date = utils.getDate(props.weather.dt);
  console.log("DATE"+date);
  return (
    <div onClick={props.onClick}>
        <div style={styles.container}>
          <img style={styles.image} src={"src/images/weather-icons/" + icon + ".svg" }/>
          <div style={styles.body}>
            {date}
          </div>
        </div>
    </div>
  )
}

Day.propTypes = {
  weather: PropTypes.object.isRequired
}

module.exports = Day;
