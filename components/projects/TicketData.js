import React, { Component } from 'react';

class TicketData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Ticket data, ID: {this.props.id}</h1>
      </div>
    );
  }
}

export default TicketData;
