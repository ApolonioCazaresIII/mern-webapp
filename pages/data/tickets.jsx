import React, { Component } from 'react';
import { Button, Container, Label, ListGroupItem, ListGroup } from 'reactstrap';
import AppNavbar from '../../components/AppNavbar';

class Tickets extends Component {
  state = {
    tickets: [
      { id: 0, username: 'polocaz' },
      { id: 1, username: 'polocaz' },
      { id: 2, username: 'polocaz' },
    ],
  };
  render() {
    const { tickets } = this.state;
    return (
      <div>
        {/* <AppNavbar /> */}
        <Container>
          <h1>Ticket list</h1>
          <ListGroup>
            {tickets.map(({ id, username }) => (
              <ListGroupItem>
                <Label style={{ float: 'left' }}>Ticket ID:{id}</Label>
                <Button href='/data/project/detail' dark>
                  View Parent Project
                </Button>
                <Label style={{ float: 'right' }}>Assigned to:{username}</Label>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Button
            color='primary'
            block
            style={{ marginTop: '.5rem' }}
            href='/dashboard'
          >
            Back
          </Button>
        </Container>
      </div>
    );
  }
}

export default Tickets;
