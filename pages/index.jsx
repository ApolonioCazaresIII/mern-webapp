import Head from 'next/head';
import Homepage from '../components/Homepage';
import React from 'react';

class Index extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Head>
          <title>Welcome to TrackMyBug</title>
        </Head>
        <Homepage />
      </div>
    );
  }
}

export default Index;
