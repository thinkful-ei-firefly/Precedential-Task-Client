import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        { this.props.children }
        <h1>Precedential Task</h1>
    <p>Manage your tasks by identifying the various roles in your life</p>
      </div>
    )
  }
}
