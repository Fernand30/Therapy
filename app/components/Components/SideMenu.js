import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Images, Constants} from "../themes"
import Button from '../Components/Button';

export default class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Images.cat} />
        </View>
        <Button
          title="Home"
          onPress={() => Actions.push('home')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Instructions"
          onPress={() => Actions.push('instructions')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Add New Child"
          onPress={() => Actions.push('child-create')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Add New Test"
          onPress={() => console.log('Not wired up yet.')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Edit Main Test"
          onPress={() => Actions.push('createquestions')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Start Practice Test"
          onPress={() => Actions.push('main-test-entrance')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Start Main Test"
          onPress={() => Actions.push('startgame')}

          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Last Test Result"
          onPress={() => console.log('Not wired up yet.')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="Full Children List"
          onPress={() => Actions.push('children-list')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
        <Button
          title="About"
          onPress={() => Actions.push('about')}
          style={styles.tab}
          textStyle={styles.buttonText}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: Constants.width/4,
    backgroundColor: '#AAAAAA'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    borderRadius: Constants.Marin*10,
    width: Constants.Marin*20,
    height: Constants.Marin*20
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 40,
    marginTop: Constants.Marin*2
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: Constants.Font*13
  }
};
