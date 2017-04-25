import React, {PropTypes} from 'react';
import GetWeather from '../components/GetWeather';


var GetWeatherContainer = React.createClass({
  contextTypes: {
   router: React.PropTypes.object.isRequired
  },
  
  getDefaultProps: function(){
    return {
      direction: 'column'
    }
  },
  
  propTypes: {
    direction: PropTypes.string
  },
  
  getInitialState: function(){
    return {
      location: ''
    }
  },
  
  handleSubmitLocation: function(){
    this.context.router.push('/forecast/' + this.state.location)
  },
  
  handleUpdateLocation: function(e) {
    console.log("handleUpdateLocation");
    this.setState({
      location: e.target.value
    });
  },
  
  render: function () {
    return (
      <GetWeather
        location={this.state.location}
        direction={this.props.direction}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}/>
    )
  }
})


module.exports = GetWeatherContainer;
