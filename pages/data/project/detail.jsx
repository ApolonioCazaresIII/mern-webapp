import React, { useState } from 'react';
import AppNavbar from '../../../components/AppNavbar';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import DetailsData from '../../../components/projects/DetailsData';
import TicketData from '../../../components/projects/TicketData';
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Jumbotron,
} from 'reactstrap';

function ProjectDetails(props) {
  const state = { project: [], pid: '' };
  const [activeTab, setActiveTab] = useState('1');
  const router = useRouter();
  const { pid } = router.query;
  state.pid = pid;

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <AppNavbar />
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
              style={{ cursor: 'pointer' }}
            >
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
              style={{ cursor: 'pointer' }}
            >
              Tickets
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <Jumbotron>
              <DetailsData id={state.pid} />
            </Jumbotron>
          </TabPane>
          <TabPane tabId='2'>
            <Jumbotron>
              <TicketData id={state.pid} />
            </Jumbotron>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
}

export default ProjectDetails;
