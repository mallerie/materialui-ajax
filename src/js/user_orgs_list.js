import React, { Component } from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DeviceHub from 'material-ui/lib/svg-icons/hardware/device-hub';



export default class UserOrgsList extends Component {

  constructor(...props) {
    super(...props);
    this.state = { orgs: [] };
  }

  componentWillMount() {

    let { user } = this.props.params;

      ajax(`https://api.github.com/users/${user}/orgs?access_token=a0473451f3d03f83766ba675472e04b6f03d01ec`).then(loadedData => {
      this.setState({orgs: loadedData});
    })
  }

  getOrgs(org) {

    return  (
      <ListItem
        key={org.id}
        primaryText={org.login}
        leftAvatar={<Avatar src={org.avatar_url} />}
        rightIcon={<DeviceHub />}
      />
    )
  }

  render() {

    let { orgs } = this.state;
    let { user } = this.props.params;

    return(
      <div className="orgs-list">
        <List>
          <h3 className="orgs-list">Github Orgs for {user}</h3>
          {orgs.map(::this.getOrgs)}
        </List>
      </div>
    )
  }
}


    



