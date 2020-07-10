import React, { Component } from 'react';
import AppNavbar from '../../../components/AppNavbar';
import {
  Alert,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  ListGroup,
  Input,
  Jumbotron,
  Button,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const axios = require('axios');

class ProjectCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertColor: 'danger',
      name: '',
      desc: '',
      creator: '',
      errMessage: '',
      modal: false,
      invemail: '',
      show: false,
      setShow: true,
    };
    
    this.create = this.create.bind(this);
  }

  async componentDidMount() {
    let res = await axios.get('/api/auth/google/data');
    this.setState({ user: res.data.user, isAuth: res.data.isAuthenticated });
  }

  sendInvite = () => {
    // TODO: Process email invite
    this.toggle();
  };

  setError = (msg) => {
    this.setState({ errMessage: msg });
  };

  setShow = (val) => {
    this.setState({ show: val });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async create() {
    // Required fields must not be empty
    if (this.state.name == '') {
      this.setState({ alertColor: 'danger' });
      this.setError('You must enter a project name!');
      this.setShow(true);
    } else if (this.state.creator == '') {
      this.setState({ alertColor: 'danger' });
      this.setError('You must enter a creator name!');
      this.setShow(true);
    } else {
      // TODO: Grab current user and use that as creator
      // Carry out insert action
      if (this.state.desc == '') {
        await this.setState({ desc: 'none' });
      }
      var res = null;
      try {
        res = await axios.post('/api/projects', {
          payload: {
            name: this.state.name,
            creator: this.state.creator,
            desc: this.state.desc,
          },
        });
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }
      console.log(res);
      // Show that it worked
      if (res.data.status == 'ok') {
        // Notify user that creation was successful
        this.setState({ alertColor: 'info' });
        this.setError('Creation successful, redirecting...');
        this.setShow(true);
        setTimeout(function () {
          window.location.href = '/dashboard';
        }, 2000);
      } else {
        // Notify user that creation was unsuccessful
        this.setState({ alertColor: 'danger' });
        this.setError(
          'Creation failed, there is another project with the same name!'
        );
        this.setShow(true);
      }
    }
  }

  render() {
    return (
      <div>
        <AppNavbar isAuth={this.state.isAuth} />
        <div id='toastParent'>
          <Alert
            id='toastBody'
            color={this.state.alertColor}
            isOpen={this.state.show}
            toggle={() => this.setShow(false)}
          >
            {this.state.errMessage}
          </Alert>
        </div>
        <Container>
          <Jumbotron>
            <h1 className='display-4'>Create a project</h1>
            <Form>
              <FormGroup row>
                <Label for='name' style={{ marginTop: '.5rem' }} sm={2}>
                  Project name
                </Label>
                <Col sm={10}>
                  <Input
                    type='text'
                    name='name'
                    id='name'
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='creator' style={{ marginTop: '.5rem' }} sm={2}>
                  Creator
                </Label>
                <Col sm={10}>
                  <Input
                    type='text'
                    name='creator'
                    id='creator'
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='desc' style={{ marginTop: '.5rem' }} sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type='textarea'
                    name='desc'
                    id='desc'
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              {
                // TODO: Plan invitations out more
                /* 
                
                <FormGroup row>
                  <Label sm={2} style={{ marginTop: '.5rem' }}>
                    Invited:
                  </Label>
                  <Col sm={6}>
                    <ListGroup>
                      <ListGroupItem>caz3000</ListGroupItem>
                      <ListGroupItem>tek313</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col sm={4}>
                    <Button color='dark' block onClick={this.toggle}>
                      Invite
                    </Button>
                  </Col>
                </FormGroup>
              */
              }

              <FormGroup row>
                <Button
                  color='dark'
                  style={{ marginTop: '2rem' }}
                  block
                  onClick={this.create}
                >
                  Create
                </Button>
              </FormGroup>
            </Form>
          </Jumbotron>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Invite members</ModalHeader>
            <ModalBody>
              <Label for='invemail'>Collaborator Email</Label>
              <Input
                type='text'
                id='invemail'
                name='invemail'
                placeholder='example@mail.com'
                onChange={this.onChange}
              ></Input>
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={this.sendInvite}>
                Invite
              </Button>
              <Button color='dark' onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ProjectCreate;
