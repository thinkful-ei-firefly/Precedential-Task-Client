import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        { this.props.children }
        <h1>Precedential Task</h1>
        <div>Priority One</div>
    <div>Priority Two</div>
    <div>Priority Three</div>
    <div>Priority Four</div>
      </div>
    )
  }
}
