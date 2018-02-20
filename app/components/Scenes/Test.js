import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curQuestion: 0,
      score: 0,
      answers: []
    };
  }

  render() {
    return <Text>------PIC TEST PIC TEST PIC TEST------</Text>;
  }
}
