import React, { Component } from 'react';

class DetailsData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Details data, ID:{this.props.id}</h1>
      </div>
    );
  }
}

export default DetailsData;
