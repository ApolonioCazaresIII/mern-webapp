import React, { Component } from 'react';
import AppNavbar from '../../../components/AppNavbar';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';

class TicketCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertColor: 'red',
      show: false,
      name: '',
      creator: '',
      responsible: '',
      modal: false,
      projname: '',
      projid: '',
      category: 'frontend',
      description: '',
      status: 'notstarted',
      errmsg: '',
      projectlist: [{ label: 'Project name1', value: 'Project ID' }],
      modalSelect: '',
    };

    this.create = this.create.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setShow = (val) => {
    this.setState({ show: val });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  modalSelect = () => {
    // set project id and name
    console.log(this.state);
  };

  async create() {
    // make sure fields are filled correctly
    // TODO: creator filled behind the scenes
    // TODO: Grab project name and id using modal with project list
    if (this.state.name == '') {
      this.setState({
        alertColor: 'danger',
        errmsg: 'Ticket name is required...',
      });
      this.setShow(true);
    } else if (this.state.creator == '') {
      this.setState({
        alertColor: 'danger',
        errmsg: 'Created by is required...',
      });
      this.setShow(true);
    } else {
      // initialize non required fields if they are empty
      if (this.state.desc == '') {
        this.setState({ desc: 'none' });
      } else if (responsible == '') {
        this.setState({ desc: 'none' });
      }
      var res = null;
      try {
        res = await axios.post('/api/tickets', {
          payload: {
            name: this.state.name,
            creator: this.state.creator,
            responsible: this.state.responsible,
            projectname: this.state.projname,
            projectid: this.state.projid,
            category: this.state.category,
            desc: this.state.description,
            status: this.state.status,
          },
        });
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }

      if (res.data.status == 'ok') {
        this.setState({
          alertColor: 'info',
          errmsg: 'Creation successful, redirecting...',
        });
        this.setShow(true);
        setTimeout(function () {
          window.location.href = '/dashboard';
        }, 2000);
      } else {
        // Creation failed
        this.setState({
          alertColor: 'danger',
          errmsg:
            'Ticket creation failed... project has another ticket with that name',
        });
        this.setShow(true);
      }
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <div id='toastParent'>
          <Alert
            id='toastBody'
            color={this.state.alertColor}
            isOpen={this.state.show}
            toggle={() => this.setShow(false)}
          >
            {this.state.errmsg}
          </Alert>
        </div>
        <Container>
          {
            // TODO: add a way for user to set up categories
          }
          <Jumbotron>
            <h1 className='display-4'>Create a ticket</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup row>
                <Label for='name' sm={2}>
                  Ticket name
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
                  Created by
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
                <Label for='responsible' style={{ marginTop: '.5rem' }} sm={2}>
                  Assigned to
                </Label>
                <Col sm={10}>
                  <Input
                    type='text'
                    name='responsible'
                    id='responsible'
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for='category' style={{ marginTop: '.5rem' }} sm={2}>
                  Category
                </Label>
                <Col sm={10}>
                  <Input
                    type='select'
                    name='category'
                    id='category'
                    onChange={this.onChange}
                  >
                    <option value='frontend'>Front End</option>
                    <option value='backend'>Back End</option>
                    <option value='testing'>Testing</option>
                    <option value='planning'>Planning</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='description' style={{ marginTop: '.5rem' }} sm={2}>
                  Description
                </Label>
                <Col sm={10}>
                  <Input
                    type='text'
                    name='description'
                    id='description'
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='status' style={{ marginTop: '.5rem' }} sm={2}>
                  Status
                </Label>
                <Col sm={10}>
                  <Input
                    type='select'
                    name='status'
                    id='status'
                    onChange={this.onChange}
                  >
                    <option value='notstarted'>Not started</option>
                    <option value='started'>Started</option>
                    <option value='review'>In review</option>
                    <option value='complete'>Completed</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Button onClick={this.toggle}>Choose project</Button>
              </FormGroup>
              <FormGroup row>
                <Label for='projname' style={{ marginTop: '.5rem' }} sm={2}>
                  Project: {this.state.projname}
                </Label>
              </FormGroup>
              <FormGroup row>
                <Label for='projid' style={{ marginTop: '.5rem' }} sm={2}>
                  Project ID: {this.state.projid}
                </Label>
              </FormGroup>
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
            <ModalHeader toggle={this.toggle}>Choose project</ModalHeader>
            <ModalBody>
              <Select
                onChange={(opt) =>
                  this.setState({
                    projid: opt.value,
                    projname: opt.label,
                  })
                }
                options={this.state.projectlist}
              />
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={this.modalSelect}>
                Select
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

export default TicketCreate;
