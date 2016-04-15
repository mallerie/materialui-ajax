import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, hashHistory } from 'react-router';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Person from 'material-ui/lib/svg-icons/social/person';



export default class GithubUsers extends Component {
  
  constructor(...args) {
    super(...args);
  }

  render() {
    return  (
      <div>  
        <List>
          <h3>Github Users</h3>
          <ListItem
            primaryText="jisaacks"
            rightIcon={<Person />}
            onClick={() => hashHistory.push('/user_orgs_list/jisaacks')}
          />
          <ListItem
            primaryText="maryrosecook"
            rightIcon={<Person />}
            onClick={() => hashHistory.push('/user_orgs_list/maryrosecook')}
          />
          <ListItem
            primaryText="addyosmani"
            rightIcon={<Person />}
            onClick={() => hashHistory.push('/user_orgs_list/addyosmani')}
          />
          <ListItem
            primaryText="c9s"
            rightIcon={<Person />}
            onClick={() => hashHistory.push('/user_orgs_list/c9s')}
          />
          <ListItem
            primaryText="kevinsawicki"
            rightIcon={<Person />}
            onClick={() => hashHistory.push('/user_orgs_list/kevinsawicki')}
          />
        </List>
      </div>  
    )
  }
}