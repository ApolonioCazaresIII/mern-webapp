import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import { Button, Container, Label, Jumbotron } from 'reactstrap';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Label>Should only be seen when logged in</Label>
          <Jumbotron>
            <Label>Some generic information about the projects</Label>
            <Button block href='/data/projects'>
              Checkout Projects
            </Button>
          </Jumbotron>
          <Jumbotron>
            <Label>Some generic statistics about the projects</Label>
            <Button block href='/data/tickets'>
              Checkout Tickets
            </Button>
          </Jumbotron>
          <Jumbotron>
            <Label>Should only be seen as a project lead</Label>
            <Label>Some generic statistics about the projects</Label>
            <Button block href='/data/project/create'>
              Create a new project
            </Button>
          </Jumbotron>
          <Jumbotron>
            <Label>Should be seen by all users</Label>
            <Label>Stats maybe number of tickets</Label>
            <Button block href='/data/ticket/create'>
              Create a new ticket
            </Button>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
