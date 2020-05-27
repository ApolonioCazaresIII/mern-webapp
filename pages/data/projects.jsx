import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import { Button, Container, Label, ListGroupItem, ListGroup } from 'reactstrap';

class Projects extends Component {
  state = {
    projects: [
      { id: 0, username: 'polocaz' },
      { id: 1, username: 'polocaz' },
      { id: 2, username: 'polocaz' },
    ],
  };
  render() {
    const { projects } = this.state;
    return (
      <div>
        <AppNavbar />
        <Container>
          <h1>Project list</h1>
          <ListGroup>
            {projects.map(({ id, username }) => (
              <ListGroupItem>
                <Label style={{ float: 'left' }} key={id}>
                  Project ID:{id}
                </Label>
                <Button
                  style={{ margin: 'auto' }}
                  href='/data/project/detail'
                  dark
                >
                  View tickets
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

export default Projects;
