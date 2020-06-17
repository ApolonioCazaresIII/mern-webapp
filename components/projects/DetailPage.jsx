import React, { Component } from 'react';
import AppNavbar from '../AppNavbar';
import classnames from 'classnames';
import ProjectData from '../../components/projects/Details/ProjectData';
import TicketData from '../../components/projects/Details/TicketData';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Jumbotron,
  Spinner,
} from 'reactstrap';

import axios from 'axios';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      pid: this.props.mypid,
      activeTab: '3',
      tickets: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  async componentDidMount() {
    // axios get request
    let temp = this.props._id;
    console.log(temp);
    if (temp != undefined) {
      // pass string without quotations
      let sub = temp.substring(1, temp.length - 1);
      let url = `/api/projects/${sub}`;
      let res = await axios.get(url);
      // update state with response
      this.setState({ project: res.data.cursor[0] });
      // Grab list of tickets associated with the project
      this.toggle('1');
    }
  }

  async componentDidUpdate(prev) {
    if (prev._id !== this.props._id) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
                style={{ cursor: 'pointer' }}
              >
                Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
                style={{ cursor: 'pointer' }}
              >
                Tickets
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
              <Jumbotron>
                <ProjectData project={this.state.project} />
              </Jumbotron>
            </TabPane>
            <TabPane tabId='2'>
              <Jumbotron>
                <TicketData data={this.state.tickets} />
              </Jumbotron>
            </TabPane>
            <TabPane tabId='3'>
              <Jumbotron style={{ textAlign: 'center' }}>
                <Spinner></Spinner>
              </Jumbotron>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

export default DetailPage;
