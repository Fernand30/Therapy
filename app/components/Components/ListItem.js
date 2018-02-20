import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class ListItem extends Component {
  render() {
    return <Text style={styles.text}>{this.props.item.name}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 280
  }
});

export default ListItem;
