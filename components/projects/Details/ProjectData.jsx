import React, { Component } from 'react';

class ProjectData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Project name: {this.props.project.name}</h1>
        <h2>Project ID: {this.props.project._id}</h2>
        <h2>Created by: {this.props.project.creator}</h2>
        <h2>Description: {this.props.project.desc}</h2>
      </div>
    );
  }
}

export default ProjectData;
