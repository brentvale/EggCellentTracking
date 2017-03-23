import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Main from './main.jsx';
import EggListContainer from './egg_list/egg_list_container';
import ChickenListContainer from './chicken_list/chicken_list_container';
import ChickenShowContainer from './chicken_show/chicken_show_container';
import BatchNewContainer from './batch_new/batch_new_container';
import BatchEditContainer from './batch_edit/batch_edit_container';
import BatchShowContainer from './batch_show/batch_show_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="chickens" component={ChickenListContainer} />        
        <Route path="chickens/:chicken_name" component={ChickenShowContainer} />
        <Route path="eggs" component={EggListContainer} />
				<Route path="createBatch" component={BatchNewContainer} />
				<Route path="batch_edit/:batch_id" component={BatchEditContainer} />
				<Route path="batch/:batch_id" component={BatchShowContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root;