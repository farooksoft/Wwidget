import React, {PropTypes} from 'react';

import Loading from '../components/Loading';
import Day from './Day';

var styles = {
  header: {
    paddingTop: 20,
    fontSize: 55,
    fontWeight: 100,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 30,
    fontWeight: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center'
  },
  dayContainer: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  }
}


function Forecast (props) {
 if (props.isLoading === true) {
   return (
     <Loading speed={100} text="One Moment" />
   )
 }
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{props.forecast.data.city.name}</h1>
      [Select any Day for Detailed Report]
      <div style={styles.dayContainer}>
        {
          props.forecast.data.list.map(function(item, index){
            // debugger
            return (
              <Day
                key={index}
                weather={item}
                onClick={props.handleClick.bind(null, item)}/>
            );
          })
        }
      </div>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;
