import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }
  _onHideUnderlay() {
    this.setState({ pressed: false });
  }
  _onShowUnderlay() {
    this.setState({ pressed: true });
  }
  _onPress() {
    this.props.onPress();
  }

  render() {
    return (
      <View style={{ ...this.props.style, overflow: 'hidden' }}>
        <TouchableOpacity
          onPress={this._onPress.bind(this)}
          style={{ flex: 1 }}
        >
            <Text style={this.props.textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

Button.defaultProps = {
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  style: {
    height: 20,
    width: 120
  }
};

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  pressedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CEEBFD',
    flex: 1
  }
};
