import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import BasicScene from './BasicScene';

export default class Instructions extends Component {
  render() {
    return (
      <BasicScene header="Instructions">
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
        <Text>A random line appears in the wild.</Text>
      </BasicScene>
    );
  }
}
