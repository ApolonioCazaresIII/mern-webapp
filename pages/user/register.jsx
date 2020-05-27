import React, { Component, useState } from 'react';
import AppNavbar from '../../components/AppNavbar';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Button,
  Alert,
} from 'reactstrap';

const axios = require('axios');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailaddr: '',
      emailaddrconfirm: '',
      errMessage: '',
      password: '',
      passwordconfirm: '',
      show: false,
      setShow: true,
      username: '',
      alertColor: 'danger',
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  setShow = (val) => {
    this.setState({ show: val });
  };

  setError = (msg) => {
    this.setState({ errMessage: msg });
  };

  async handleOnClick() {
    // TODO: Make sure email input is valid
    // check if input values are correct
    if (this.state.username == null) {
      this.setError('You must enter a username! Try again.');
      this.setShow(true);
    } else if (this.state.username.length < 6) {
      this.setError('Your username must be at least 6 characters! Try again.');
      this.setShow(true);
    } else if (this.state.emailaddr != this.state.emailaddrconfirm) {
      this.setError('Email addresses are not matching! Try again.');
      this.setShow(true);
    } else if (this.state.password != this.state.passwordconfirm) {
      this.setError('Passwords are not matching! Try again.');
      this.setShow(true);
    } else if (this.state.password.length < 8) {
      this.setError('Passwords must be at least 8 characters! Try again.');
      this.setShow(true);
    } else {
      // Insert into the DB
      var res;
      try {
        res = await axios.post('/api/users', {
          payload: {
            email: this.state.emailaddr,
            username: this.state.username,
            password: this.state.password,
          },
        });
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }
      if (res.data.msg == 'ok') {
        // Notify user that registration was successful
        this.setState({ alertColor: 'info' });
        this.setError('Registration successful, redirecting...');
        this.setShow(true);
        setTimeout(function () {
          window.location.href = '/';
        }, 2000);
      } else if (res.data.msg == 'bad_email') {
        // Notify user that the email is already in use
        this.setState({ alertColor: 'danger' });
        this.setError('Registration failed, email already in use...');
        this.setShow(true);
      } else {
        // Notify user that the username is already in use
        this.setState({ alertColor: 'danger' });
        this.setError('Registration failed, username already in use...');
        this.setShow(true);
      }
    }

    // if there is an error, toggle the error alert
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
            {this.state.errMessage}
          </Alert>
        </div>

        <Container>
          <Jumbotron>
            <h1 className='display-4'>Sign up</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='username' style={{ marginTop: '.5rem' }}>
                  Username
                </Label>
                <Input
                  type='text'
                  name='username'
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
                <Button
                  color='dark'
                  style={{ marginTop: '2rem' }}
                  block
                  onClick={this.handleOnClick}
                >
                  Register
                </Button>
              </FormGroup>
            </Form>
            <p>
              Already have an account? <a href='/user/login'>Sign in</a>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Register;
