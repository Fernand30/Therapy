import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../Components/Button';
import BasicScene from './BasicScene';

export default class MainTestEntrance extends Component {
  render() {
    return (
      <BasicScene header="Main Test">
        <Text>A new challenger arrives.</Text>
        <Button title="Start new test" onPress={() => Actions.reset('test')} />
      </BasicScene>
    );
  }
}
