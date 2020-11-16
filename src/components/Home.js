import React, { Component } from 'react';
import Hero from './Hero';
import Tables from './Table';
import TabCode from './TabCode';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Tables />
        <TabCode />
      </div>
    );
  }
}
