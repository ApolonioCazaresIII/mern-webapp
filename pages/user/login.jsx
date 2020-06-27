import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => {
    console.log('Clicked signin');
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <Container className='themed-container' fluid='sm'>
          <Jumbotron>
            <h1 className='display-4'>Sign In</h1>
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
                <Label for='passcode' style={{ marginTop: '.5rem' }}>
                  Password
                </Label>
                <Input
                  type='password'
                  name='password'
                  id='passcode'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Sign in
                </Button>
                <Button
                  href='/api/auth/google'
                  color='danger'
                  style={{ marginTop: '2rem' }}
                  block
                >
                  Sign in with Google
                </Button>
              </FormGroup>
            </Form>
            <p>
              Don't have an account? <a href='/user/register'>Sign up</a>
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Login;
