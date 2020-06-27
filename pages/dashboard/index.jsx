import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import { Button, Container, Label, Jumbotron } from 'reactstrap';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    user: {},
    isAuth: false,
  };

  async componentDidMount() {
    let res = await axios.get('/api/auth/google/data');
    this.setState({ user: res.data.user, isAuth: res.data.isAuthenticated });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <AppNavbar isAuth={this.state.isAuth} />
        <Container>
          <h1>Welcome {this.state.user.displayName}</h1>
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
