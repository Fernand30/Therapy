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
import { Actions } from 'react-native-router-flux';
//This data should be in firebase in the future
const Q1 = {id:1,name: 'question1', question: Images.bird, rightAnswer: Images.birdnest, wrongAnswer: Images.fishbowl}
const Q2 = {id:2,name: 'question2', question: Images.car, rightAnswer: Images.road, wrongAnswer: Images.sea}
const Q4 = {id:4,name: 'question4', question: Images.anchor, rightAnswer: Images.windsurf, wrongAnswer: Images.sailboat}
const Q5 = {id:5,name: 'question5', question: Images.shirt, rightAnswer: Images.sledge, wrongAnswer: Images.tie}

class BasicScene extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state=({
      question1: false,
      questuion2: false,
      questuion3: false,
      questuion4: false,
      questuion5: false,
      questions: [],
    })
    item = this.props.navigation.state.params.item //data from Edit new test
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

  goCheckboard(item){
    if(item.length==0){
      alert('please select questions')
    }else{
      Actions.checkboard({item: item})
    }
  }

  clickQuestion(item){
    questions = this.state.questions
    //questions = []
    questions.push(item)
    this.setState({
      questions: questions
    })
    if(item.name =='question1'){
      this.setState({
        question1: true
      })
    }else if(item.name =='question2'){
      this.setState({
        question2: true
      })
    }else if(item.name =='question4'){
      this.setState({
        question4: true
      })
    }else if(item.name =='question5'){
      this.setState({
        question5: true
      })
    }else{
      this.setState({
        question3: true
      })
    }
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

  render() {
    //check image url or local image
    if((item)&&!Number(item.question)) Q3 = {id:3,name: 'question3', question: item.question, rightAnswer: item.rightAns, wrongAnswer: item.wrongAns}

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
            <Text style={styles.headerText}>Practice Test</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.labelView}>
              <Text style={styles.label}>Question</Text>
              <Text style={styles.label}>Right Answer</Text>
              <Text style={styles.label}>Wrong Answer</Text>
            </View>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q1)} style={styles.selectButton}>
              {
                (this.state.question1)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q1.question} style={styles.bird}/>
              <Image source={Q1.rightAnswer} style={styles.bird}/>
              <Image source={Q1.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q2)} style={styles.selectButton}>
              {
                (this.state.question2)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q2.question} style={styles.bird}/>
              <Image source={Q2.rightAnswer} style={styles.bird}/>
              <Image source={Q2.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q4)} style={styles.selectButton}>
              {
                (this.state.question4)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q4.question} style={styles.bird}/>
              <Image source={Q4.rightAnswer} style={styles.bird}/>
              <Image source={Q4.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q5)} style={styles.selectButton}>
              {
                (this.state.question5)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q5.question} style={styles.bird}/>
              <Image source={Q5.rightAnswer} style={styles.bird}/>
              <Image source={Q5.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            {((item)&&!Number(item.question))?
              <TouchableOpacity onPress={this.clickQuestion.bind(this,Q3)} style={styles.selectButton}>
                {
                  (this.state.question3)?<Image source={Images.check} style={styles.check}/>
                                         :<View style={styles.check}/>
                }
                <Image source={{uri:item.question}} style={styles.bird}/>
                <Image source={{uri:item.rightAns}} style={styles.bird}/>
                <Image source={{uri:item.wrongAns}} style={styles.bird}/>
              </TouchableOpacity>:null
            }
            <TouchableOpacity onPress={this.goCheckboard.bind(this,this.state.questions)} style={styles.done}>
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
  check:{
    width: Constants.Marin*5,
    height: Constants.Marin*5
  },
  done:{
    width: Constants.Marin*20,
    height: Constants.Marin*10,
    marginTop:Constants.Marin*2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
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
  bird:{
    width: Constants.Marin*12,
    height: Constants.Marin*12,
    alignSelf:'center'
  },
  hamburger: {
    height: Constants.width/10,
    width: Constants.width/10
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems:'center'
  },
  selectButton:{
    flexDirection:'row',
    width: Constants.width - Constants.Marin*30,
    borderWidth: 1,
    height: Constants.Marin*15,
    paddingHorizontal: Constants.Marin*2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.Marin*2
  },
  selectedButton:{
    flexDirection:'row',
    width: Constants.width - Constants.Marin*30,
    borderWidth: 1,
    borderColor: 'red',
    height: Constants.Marin*15,
    paddingHorizontal: Constants.Marin*2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.Marin*2
  },
  labelView:{
    flexDirection:'row',
    width: Constants.width - Constants.Marin*30,
    borderWidth: 1,
    height: Constants.Marin*5,
    paddingHorizontal: Constants.Marin*2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.Marin*2
  },
  label:{
    fontSize:Constants.Font*15,
    textAlign: 'center'
  },
  touchText:{
    fontSize:Constants.Font*20
  }
});

const mapStateToProps = state => {
  return { menuIsOpen: state.menuIsOpen };
};

export default connect(mapStateToProps, actions)(BasicScene);
