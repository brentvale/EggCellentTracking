import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Main from './main.jsx';
import EggListContainer from './egg_list/egg_list_container';
import ChickenListContainer from './chicken_list/chicken_list_container';
import ChickenShowContainer from './chicken_show/chicken_show_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="chickens" component={ChickenListContainer} />        
        <Route path="chickens/:chicken_name" component={ChickenShowContainer} />
        <Route path="eggs" component={EggListContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;