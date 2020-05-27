import React, { Component } from 'react';
import AppNavbar from '../../components/AppNavbar';
import { Container, Col, Row, Button, Jumbotron } from 'reactstrap';
import Head from 'next/head';
import styles from '../../components/about.module.css';

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Head>
          <title>About TrackMyBug</title>
        </Head>
        <AppNavbar />
        <img
          src='/images/profile.jpg
            '
          className={`${styles.headerHomeImage} ${styles.borderCircle}`}
          alt={name}
        />
        <Jumbotron>
          <h1 className='display-3'>Hello, I'm Apolonio!</h1>
          <p className='lead'>{about_text}</p>
          <Container>
            <Row>
              <Col>
                <Button
                  color='primary'
                  href='https://www.linkedin.com/in/apolonio-cazares-36bb24184/'
                  block
                >
                  LinkedIn
                </Button>
              </Col>
              <Col>
                <Button
                  color='primary'
                  href='https://github.com/ApolonioCazaresIII'
                  block
                >
                  Github
                </Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

const name = 'Apolonio Cazares';
const about_text =
  'I am a Software Engineer from the Metro Detroit area and I have a passion for creating things. With this project I aim to showcase my talent as a Full Stack Web Developer. \nIf there are any questions please feel free to reach out at my email aprcazares@gmail.com, thanks for visiting TrackMyBug!';

export default About;
