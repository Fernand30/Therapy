import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import BasicScene from './BasicScene';

export default class About extends Component {
  render() {
    return (
      <BasicScene header="About">
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
      </BasicScene>
    );
  }
}
