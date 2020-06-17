import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';

class TicketData extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Ticket data for project {this.pid}</h1>
        <ListGroup>
          {this.props.tickets.map({ name, projectname, category, status })}
        </ListGroup>
      </div>
    );
  }
}

export default TicketData;
