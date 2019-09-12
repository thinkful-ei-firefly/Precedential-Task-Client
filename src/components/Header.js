import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        { this.props.children }
        <div>
          <img src="placeholder" alt = "Logo"></img>
        </div>
        <div>
        <p>Manage your tasks by identifying the various roles in your life</p>
        </div>
      </div>
    )
  }
}
