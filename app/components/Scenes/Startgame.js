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
  ScrollView,
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
const Q6 = {id:6,name: 'question6', question: Images.bed, rightAnswer: Images.ladle, wrongAnswer: Images.pajamas}
const Q7 = {id:7,name: 'question7', question: Images.bus, rightAnswer: Images.rv, wrongAnswer: Images.ticket}
const Q8 = {id:8,name: 'question8', question: Images.book, rightAnswer: Images.letter, wrongAnswer: Images.library}
const Q9 = {id:9,name: 'question9', question: Images.elephant, rightAnswer: Images.horse, wrongAnswer: Images.saddle}
const Q10 = {id:10,name: 'question10', question: Images.chair, rightAnswer: Images.leopard, wrongAnswer: Images.shirt}
const Q11 = {id:11,name: 'question11', question: Images.photo, rightAnswer: Images.picnic, wrongAnswer: Images.plane}
const Q12 = {id:12,name: 'question12', question: Images.cheese, rightAnswer: Images.cow, wrongAnswer: Images.leaf}
const Q13 = {id:13,name: 'question13', question: Images.handlebars, rightAnswer: Images.motorbike, wrongAnswer: Images.parachute}
const Q14 = {id:14,name: 'question14', question: Images.feather, rightAnswer: Images.goose, wrongAnswer: Images.koala}
const Q15 = {id:15,name: 'question15', question: Images.sandwich, rightAnswer: Images.spoon, wrongAnswer: Images.watch}
const Q16 = {id:16,name: 'question16', question: Images.lemon, rightAnswer: Images.pear, wrongAnswer: Images.strawberry}
const Q17 = {id:17,name: 'question17', question: Images.leaf, rightAnswer: Images.sailboat, wrongAnswer: Images.tree}
const Q18 = {id:18,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor}

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

  goCheckboard(){
    // if(item.length==0){
    //   alert('please select questions')
    // }else{
    //   Actions.checkboard({item: item})
    // }
    global.questions = this.state.questions
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
    }else if(item.name =='question6'){
      this.setState({
        question6: true
      })
    }else if(item.name =='question7'){
      this.setState({
        question7: true
      })
    }else if(item.name =='question8'){
      this.setState({
        question8: true
      })
    }else if(item.name =='question9'){
      this.setState({
        question9: true
      })
    }else if(item.name =='question10'){
      this.setState({
        question10: true
      })
    }else if(item.name =='question11'){
      this.setState({
        question11: true
      })
    }else if(item.name =='question12'){
      this.setState({
        question12: true
      })
    }else if(item.name =='question13'){
      this.setState({
        question13: true
      })
    }else if(item.name =='question14'){
      this.setState({
        question14: true
      })
    }else if(item.name =='question15'){
      this.setState({
        question15: true
      })
    }else if(item.name =='question16'){
      this.setState({
        question16: true
      })
    }else if(item.name =='question17'){
      this.setState({
        question17: true
      })
    }else if(item.name =='question18'){
      this.setState({
        question18: true
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
          <ScrollView>
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
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q6)} style={styles.selectButton}>
              {
                (this.state.question6)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q6.question} style={styles.bird}/>
              <Image source={Q6.rightAnswer} style={styles.bird}/>
              <Image source={Q6.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q7)} style={styles.selectButton}>
              {
                (this.state.question7)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q7.question} style={styles.bird}/>
              <Image source={Q7.rightAnswer} style={styles.bird}/>
              <Image source={Q7.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q8)} style={styles.selectButton}>
              {
                (this.state.question8)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q8.question} style={styles.bird}/>
              <Image source={Q8.rightAnswer} style={styles.bird}/>
              <Image source={Q8.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q9)} style={styles.selectButton}>
              {
                (this.state.question9)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q9.question} style={styles.bird}/>
              <Image source={Q9.rightAnswer} style={styles.bird}/>
              <Image source={Q9.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q10)} style={styles.selectButton}>
              {
                (this.state.question10)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q10.question} style={styles.bird}/>
              <Image source={Q10.rightAnswer} style={styles.bird}/>
              <Image source={Q10.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q11)} style={styles.selectButton}>
              {
                (this.state.question11)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q11.question} style={styles.bird}/>
              <Image source={Q11.rightAnswer} style={styles.bird}/>
              <Image source={Q11.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q12)} style={styles.selectButton}>
              {
                (this.state.question12)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q12.question} style={styles.bird}/>
              <Image source={Q12.rightAnswer} style={styles.bird}/>
              <Image source={Q12.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q13)} style={styles.selectButton}>
              {
                (this.state.question13)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q13.question} style={styles.bird}/>
              <Image source={Q13.rightAnswer} style={styles.bird}/>
              <Image source={Q13.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q14)} style={styles.selectButton}>
              {
                (this.state.question14)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q14.question} style={styles.bird}/>
              <Image source={Q14.rightAnswer} style={styles.bird}/>
              <Image source={Q14.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q15)} style={styles.selectButton}>
              {
                (this.state.question15)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q15.question} style={styles.bird}/>
              <Image source={Q15.rightAnswer} style={styles.bird}/>
              <Image source={Q15.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q16)} style={styles.selectButton}>
              {
                (this.state.question16)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q16.question} style={styles.bird}/>
              <Image source={Q16.rightAnswer} style={styles.bird}/>
              <Image source={Q16.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q17)} style={styles.selectButton}>
              {
                (this.state.question17)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q17.question} style={styles.bird}/>
              <Image source={Q17.rightAnswer} style={styles.bird}/>
              <Image source={Q17.wrongAnswer} style={styles.bird}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickQuestion.bind(this,Q18)} style={styles.selectButton}>
              {
                (this.state.question18)?<Image source={Images.check} style={styles.check}/>
                                       :<View style={styles.check}/>
              }
              <Image source={Q18.question} style={styles.bird}/>
              <Image source={Q18.rightAnswer} style={styles.bird}/>
              <Image source={Q18.wrongAnswer} style={styles.bird}/>
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
          </ScrollView>
            <TouchableOpacity onPress={this.goCheckboard.bind(this)} style={styles.done}>
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
    alignItems:'center',
    paddingBottom: Constants.Marin*2
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
