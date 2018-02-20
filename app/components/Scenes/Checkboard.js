import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  StatusBar,
  NativeModules,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import SideMenu from '../Components/SideMenu';
import * as actions from '../Actions';
import { Actions } from 'react-native-router-flux';
import {Images, Constants} from "../themes"

class BasicScene extends Component {
  constructor(props) {
    super(props);
    this.state=({
      checkImage1: false,
      checkImage2: false,
      index: 0,
    })
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    ttt = this.props.navigation.state.params.item
    tttLength = ttt.length
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY
      },
      update: {
        type: LayoutAnimation.Types.linear
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY
      }
    });
  }

  renderMenu() {
    if (this.props.menuIsOpen) {
      return (
        <View style={{ flex: 1 }}>
          <SideMenu />
        </View>
      );
    }
  }

  check1(){
    this.setState({
      checkImage1: true,
      checkImage2: false,
    })
  }

  check2(){
    this.setState({
      checkImage1: false,
      checkImage2: true,
    })
  }

  goNext(){
    if(!this.state.checkImage1 && !this.state.checkImage2){
      alert('Please check any Image.')
      return;
    }
    if(!this.state.checkImage1){
      Alert.alert(
        'Sorry, try again!',
        'You are wrong.',
        [
          //If index is last then stop next
          {text: 'OK', onPress: () => (tttLength-1>this.state.index)?this.setState({checkImage2:false,checkImage1: false,index: this.state.index+1}):null},
        ],
        { cancelable: false }
      )

    }else{
      Alert.alert(
        'congratulations!',
        'You are right.',
        [
          {text: 'OK', onPress: () => (tttLength-1>this.state.index)?this.setState({checkImage2:false,checkImage1: false,index: this.state.index+1}):null},
        ],
        { cancelable: false }
      )
    }
  }

  goback(){
    Actions.pop()
  }

  render() {
    item = ttt[this.state.index]
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        {this.renderMenu()}
        <View style={{ flex: 3, alignItems: 'stretch' }}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.props.toggleMenu()}
            >
              <Image
                style={styles.hamburger}
                source={Images.hamburger_button}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Please select Image</Text>
          </View>
          <View style={styles.contentContainer}>

                      {(item.question>0)?
                        <Image source={item.question} style={styles.bird}/>
                        :
                        <Image source={{uri:item.question}} style={styles.bird}/>
                      }
                      <View style={styles.rowView}>
                        <View>
                          {(item.question>0)?
                            <Image source={item.rightAnswer} style={styles.bird}/>
                            :
                            <Image source={{uri:item.rightAnswer}} style={styles.bird}/>
                          }
                          <TouchableOpacity  onPress={this.check1.bind(this)} style={(this.state.checkImage1)?styles.checkedView:styles.checkView}>

                          </TouchableOpacity>
                        </View>
                        <View>
                          {(item.question>0)?
                            <Image source={item.wrongAnswer} style={styles.bird}/>
                            :
                            <Image source={{uri:item.wrongAnswer}} style={styles.bird}/>
                          }

                          <TouchableOpacity onPress={this.check2.bind(this)} style={(this.state.checkImage2)?styles.checkedView:styles.checkView}>

                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.rowView}>
                        <TouchableOpacity onPress={this.goback.bind(this)} style={styles.done}>
                          <Text>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goNext.bind(this)} style={styles.done}>
                          <Text>Next</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
        </View>
      </View>
    );
  }
}

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#AAAAAA'
  },
  done:{
    borderWidth: 1,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
    paddingHorizontal: 30,
    marginTop: Constants.Marin*30
  },
  checkView:{
    width:Constants.Marin*4,
    height: Constants.Marin*4,
    borderWidth:1,
    alignSelf:'center',
    marginTop: Constants.Marin*2
  },
  checkedView:{
    width:Constants.Marin*4,
    height: Constants.Marin*4,
    borderWidth:1,
    alignSelf:'center',
    marginTop: Constants.Marin*2,
    backgroundColor: 'black'
  },
  bird:{
    width: Constants.Marin*30,
    height: Constants.Marin*30,
    alignSelf:'center'
  },
  rowView:{
    flexDirection:'row',
    marginHorizontal: Constants.Marin*10,
    justifyContent: 'space-between',
    marginTop: Constants.Marin*3
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    backgroundColor: '#DDDDDD'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: Constants.Font*20,
    paddingLeft: 20
  },
  hamburger: {
    height: Constants.width/10,
    width: Constants.width/10
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop:Constants.Marin*10
  },
  selectButton:{
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.Marin*2
  },
  touchText:{
    fontSize:Constants.Font*20
  }
});

const mapStateToProps = state => {
  return { menuIsOpen: state.menuIsOpen };
};

export default connect(mapStateToProps, actions)(BasicScene);
