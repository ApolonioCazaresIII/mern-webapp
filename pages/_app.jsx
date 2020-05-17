import App from 'next/app';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
