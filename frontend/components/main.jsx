import React from 'react';
import CustomNavContainer from './navigation/custom_nav_container';

const Main = ({ children }) =>  <div>
                                  <CustomNavContainer />
																	<div id="mainBanner"></div>
                                  { children }
                                </div>

export default Main;