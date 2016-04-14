import React, { Component } from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/lib/paper';
import { ajax } from 'jquery';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


export default class UserOrgsList extends Component {

  constructor(...props) {
    super(...props);
    this.state = { user };
  }

  componentWillMount() {
    let { user } = this.props.params;
    ajax(`https://api.github.com/users/${user}/orgs`).then(user => {
      this.setState({user});
    })
  }

  
  render() {
    return(
      <div>
        
      </div>
      )
  }
}