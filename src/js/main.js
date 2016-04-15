import React, { Component } from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/lib/paper';


export default class Main extends Component {
  render() {
    return(
      <div>
        <Paper className="paper" zDepth={2}>
          <div className="children">
            {this.props.children}
          </div>
        </Paper>
        
      </div>
      )
  }
}

// <div className="main-header">
//             <h3>Github Users</h3>
//           </div>
