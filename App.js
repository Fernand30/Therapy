import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './app/Router';
import reducers from './app/components/Reducers';
// redux part
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
