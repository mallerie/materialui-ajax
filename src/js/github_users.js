import React, { Component } from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/lib/paper';
import { ajax } from 'jquery';
import { Link } from 'react-router';
import users from './user_data';


export default class GithubUsers extends Component {
  
  constructor(...args) {
    super(...args);
    this.state =  {users};
  }

  componentWillMount() {

    ajax('https://api.github.com/users/orgs').then(users => {
      this.setState({users});
    });
  }

  getUser(user) {
    return (
      <li key={user.id}>
        <Link to={`/user-orgs-list/${user}`}>{user}</Link>
      </li>
    )
  }


  render() {
    let { users } = this.state;
    return(
      <div>
        <ul>
          {users.map(::this.getUser)}
        </ul>
      </div>
      )
  }
}



