import React, { Component } from 'react';
import AppNavbar from '../../AppNavbar';
import {
  Button,
  Col,
  Container,
  Jumbotron,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

class ProjectDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Col xs='6'>
              <Jumbotron>
                <ListGroup>
                  <ListGroupItem>
                    <Label>Ticket 1</Label>
                    <Button>View ticket</Button>
                  </ListGroupItem>
                </ListGroup>
              </Jumbotron>
            </Col>
            <Col xs='6'>
              <Jumbotron>
                <ListGroup>
                  <ListGroupItem>
                    <Label>Ticket 1</Label>
                    <Button>View ticket</Button>
                  </ListGroupItem>
                </ListGroup>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectDetails;
