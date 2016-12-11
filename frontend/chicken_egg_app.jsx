import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { getAllEggs, getAllChickens } from './reducers/selectors';
import { receiveEgg, receiveEggs } from './actions/egg_actions';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

  window.store = configureStore;
  window.selector = getAllEggs;
  
  window.receiveEgg = receiveEgg;
  window.receiveEggs = receiveEggs;
  
	ReactDOM.render(<Root store={configureStore} />, root);
});
