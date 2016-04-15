// Javascript Entry Point
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from './main';
import GithubUsers from './github_users';
import UserOrgsList from './user_orgs_list';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GithubUsers}/>
      <Route path="/user_orgs_list/:user" component={UserOrgsList}/>
    </Route>       
  </Router>
), document.querySelector('.app'));
