import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from'../containers/ForecastContainer';
import CityDetailsContainer from'../containers/CityDetailsContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/forecast/:city' component={ForecastContainer} />
      <Route path='/detail/:city' component={CityDetailsContainer} />
    </Route>
  </Router>
)

module.exports = routes;
