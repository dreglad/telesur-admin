import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './layout/LoginPage';

export default [
  <Route exact path="/callback" component={LoginPage} />,
];
