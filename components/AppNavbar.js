import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen,
    });

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            {this.props.isAuth ? (
              <NavbarBrand href='/dashboard'>TrackMyBug</NavbarBrand>
            ) : (
              <NavbarBrand href='/'>TrackMyBug</NavbarBrand>
            )}

            <NavbarToggler onClick={this.toggle} navbar='true' />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/page/about'>About</NavLink>
                </NavItem>
                {this.props.isAuth ? (
                  <div>
                    <NavItem>
                      <NavLink href='/dashboard'>Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='/api/auth/logout'>Logout</NavLink>
                    </NavItem>
                  </div>
                ) : (
                  <NavItem>
                    <NavLink href='/user/login'>Login</NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
