import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import {
  Button,
  Col,
  Container,
  Label,
  ListGroupItem,
  ListGroup,
  Row,
  Spinner,
} from 'reactstrap';

const axios = require('axios');

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    // Get list of projects
    this.setState({ loading: true });
    let res = await axios.get('/api/projects');
    this.setState({ projects: res.data, loading: false });
  }

  toggle = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const { projects } = this.state;
    return (
      <div>
        <AppNavbar />
        <Container>
          <h1>Project list</h1>
          <ListGroup>
            {projects.map(({ _id, name, creator }) => (
              <ListGroupItem>
                <Row>
                  <Col>
                    <Label key={_id}>Project Name: {name}</Label>
                  </Col>
                  <Col>
                    <Button href='/data/project/detail' dark>
                      View tickets
                    </Button>
                  </Col>
                  <Col>
                    <Label>Creator: {creator}</Label>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
          {
            // Loding Spinner
            this.state.loading ? (
              <div id='spinnerParent1'>
                <Spinner id='spinnerChild1' color='dark' />
              </div>
            ) : null
          }
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
