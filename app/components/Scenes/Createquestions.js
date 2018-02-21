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
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import SideMenu from '../Components/SideMenu';
import * as actions from '../Actions';
import {Images, Constants} from "../themes"
import ImagePicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';

class BasicScene extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state=({
      question:'',
      rightAns: '',
      wrongAns: ''
    })
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

  goImagePicker(item){
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        if(item=='question'){
          this.setState({
            question: image.path
          })
        }else if(item=='rightAns'){
          this.setState({
            rightAns: image.path
          })
        }else{
          this.setState({
            wrongAns: image.path
          })
        }
      });
  }

  addQuestion(){
    Actions.startgame({item: {question: this.state.question,rightAns: this.state.rightAns,wrongAns: this.state.wrongAns}})
  }

  render() {
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
            <Text style={styles.headerText}>Add New Test</Text>
          </View>
          <View style={styles.contentContainer}>
             <Text style={styles.commonText}>Create Test Problem</Text>
             <View style={styles.rowView}>
              <Text style={styles.commonText}>Select Questions Image:  </Text>
              <TouchableOpacity onPress={this.goImagePicker.bind(this,'question')} style={styles.imagebutton}>
              {(this.state.question!='')?
                <Image style={styles.image} source={{uri: this.state.question}}/>
                :null
              }
              </TouchableOpacity>
             </View>
             <View style={styles.rowView}>
              <Text style={styles.commonText}>Select Questions Image:  </Text>
              <TouchableOpacity onPress={this.goImagePicker.bind(this,'rightAns')} style={styles.imagebutton}>
              {(this.state.rightAns!='')?
                <Image style={styles.image} source={{uri: this.state.rightAns}}/>
                :null
              }
              </TouchableOpacity>
             </View>
             <View style={styles.rowView}>
              <Text style={styles.commonText}>Select Questions Image:  </Text>
              <TouchableOpacity onPress={this.goImagePicker.bind(this,'wrongAns')} style={styles.imagebutton}>
              {(this.state.wrongAns!='')?
                <Image style={styles.image} source={{uri: this.state.wrongAns}}/>
                :null
              }
              </TouchableOpacity>
             </View>
             <TouchableOpacity onPress={this.addQuestion.bind(this)} style={styles.done}>
              <Text> Done</Text>
             </TouchableOpacity>
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
  commonText:{
    fontSize: Constants.Font*15,
    textAlign: 'center'
  },
  image:{
    width:Constants.Marin*20,
    height: Constants.Marin*20,
  },
  imagebutton:{
    width:Constants.Marin*20,
    height: Constants.Marin*20,
    borderWidth: 1,
  },
  rowView:{
    flexDirection: 'row',
    marginTop: Constants.Marin*5,
    width: Constants.width - Constants.Marin*20,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
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
    paddingTop: Constants.Marin*3
  }
});

const mapStateToProps = state => {
  return { menuIsOpen: state.menuIsOpen };
};

export default connect(mapStateToProps, actions)(BasicScene);
