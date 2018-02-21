import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../Components/Button';
import BasicScene from './BasicScene';
import {Images, Constants} from "../themes"
global.questions = []
export default class Home extends Component {
  render() {
    return (
      <BasicScene header="Home">
        <Text style={styles.instruction}>Hello Kids</Text>
        <Text style={styles.instruction}>Welcom to your happy game!!!</Text>
      </BasicScene>
    );
  }
}

const styles = StyleSheet.create({
  instruction:{
    marginTop: Constants.Marin*3,
    fontSize: Constants.Font*30,
    textAlign: 'center'
  }
});
