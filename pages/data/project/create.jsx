import React, { Component } from 'react';
import AppNavbar from '../../../components/AppNavbar';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Button,
} from 'reactstrap';

class ProjectCreate extends Component {
  state = {
    name: '',
    emailaddr: '',
    emailaddrconfirm: '',
    password: '',
    passwordconfirm: '',
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Jumbotron>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='username' style={{ marginTop: '.5rem' }}>
                  Username
                </Label>
                <Input
                  type='text'
                  name='name'
                  id='username'
                  onChange={this.onChange}
                />
                <Label for='email' style={{ marginTop: '.5rem' }}>
                  Email
                </Label>
                <Input
                  type='email'
                  name='emailaddr'
                  id='email'
                  onChange={this.onChange}
                />
                <Label for='emailconfirm' style={{ marginTop: '.5rem' }}>
                  Confirm Email
                </Label>
                <Input
                  type='email'
                  name='emailaddrconfirm'
                  id='emailconfirm'
                  onChange={this.onChange}
                />
                <Label for='passcode' style={{ marginTop: '.5rem' }}>
                  Password
                </Label>
                <Input
                  type='password'
                  name='password'
                  id='passcode'
                  onChange={this.onChange}
                />
                <Label for='passcodeconfirm' style={{ marginTop: '.5rem' }}>
                  Confirm Password
                </Label>
                <Input
                  type='password'
                  name='passwordconfirm'
                  id='passcodeconfirm'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default ProjectCreate;
