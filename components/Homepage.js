import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container, Jumbotron, Button } from 'reactstrap';

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Jumbotron>
            <h1 className='display-3'>Welcome to TrackMyBug</h1>
            <p className='lead'>This is the Homepage for TrackMyBug</p>
            <hr className='my-2' />
            <p>To start tracking your bugs sign up!</p>
            <p className='lead'>
              <Button color='primary' href='/signup'>
                Sign up
              </Button>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Homepage;
