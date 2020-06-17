import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import {
  Button,
  Col,
  Container,
  Input,
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

  // TODO: implement search

  render() {
    const { projects } = this.state;
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Col>
              <h1>Project list</h1>
            </Col>
            <Col>
              <Input
                type='text'
                id='searchparam'
                name='searchparam'
                placeholder='search by any field...'
              ></Input>
            </Col>
            <Col>
              <Button>Search</Button>
            </Col>
            <Col>
              <Button href='/data/project/create'>Create</Button>
            </Col>
          </Row>
          <ListGroup style={{ marginTop: '0.5rem' }}>
            {projects.map(({ _id, name, creator }) => (
              <ListGroupItem key={_id}>
                <Row>
                  <Col>
                    <Label>Name: {name}</Label>
                  </Col>
                  <Col>
                    <Label>Creator: {creator}</Label>
                  </Col>
                  <Col>
                    <Button href={`/data/project/detail?pid=${_id}`}>
                      View details
                    </Button>
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
