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
import * as Progress from 'react-native-progress';

//This data should be in firebase in the future
const Q = [
            {id:1,name: 'question1', question: Images.bird, rightAnswer: Images.birdnest, wrongAnswer: Images.fishbowl},
            {id:2,name: 'question2', question: Images.car, rightAnswer: Images.road, wrongAnswer: Images.sea},
            {id:4,name: 'question4', question: Images.anchor, rightAnswer: Images.windsurf, wrongAnswer: Images.sailboat},
            {id:5,name: 'question5', question: Images.shirt, rightAnswer: Images.sledge, wrongAnswer: Images.tie},
            {id:6,name: 'question6', question: Images.bed, rightAnswer: Images.ladle, wrongAnswer: Images.pajamas},
            {id:7,name: 'question7', question: Images.bus, rightAnswer: Images.rv, wrongAnswer: Images.ticket},
            {id:8,name: 'question8', question: Images.book, rightAnswer: Images.letter, wrongAnswer: Images.library},
            {id:9,name: 'question9', question: Images.elephant, rightAnswer: Images.horse, wrongAnswer: Images.saddle},
            {id:10,name: 'question10', question: Images.chair, rightAnswer: Images.leopard, wrongAnswer: Images.shirt},
            {id:11,name: 'question11', question: Images.photo, rightAnswer: Images.picnic, wrongAnswer: Images.plane},
            {id:12,name: 'question12', question: Images.cheese, rightAnswer: Images.cow, wrongAnswer: Images.leaf},
            {id:13,name: 'question13', question: Images.handlebars, rightAnswer: Images.motorbike, wrongAnswer: Images.parachute},
            {id:14,name: 'question14', question: Images.feather, rightAnswer: Images.goose, wrongAnswer: Images.koala},
            {id:15,name: 'question15', question: Images.sandwich, rightAnswer: Images.spoon, wrongAnswer: Images.watch},
            {id:16,name: 'question16', question: Images.lemon, rightAnswer: Images.pear, wrongAnswer: Images.strawberry},
            {id:17,name: 'question17', question: Images.leaf, rightAnswer: Images.sailboat, wrongAnswer: Images.tree},
            {id:18,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:19,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:20,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:21,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:22,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:23,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:24,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:25,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:26,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:27,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:28,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:29,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:30,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:31,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:32,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:33,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:34,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor},
            {id:35,name: 'question18', question: Images.cow, rightAnswer: Images.sledge, wrongAnswer: Images.tractor}
          ]

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
      ids:[],
      progress: 0,
      indeterminate: false
    })
    item = this.props.navigation.state.params.item //data from Edit new test
    
  }

  componentDidMount(){
    if(global.ids){
      this.setState({
        ids: global.ids
      })
    }
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
    done = this.state.ids.length
    
      alert('You selected'+ done +'/20 problems!')
      global.questions = this.state.questions
    
  }

  clickQuestion(item){
    questions = that.state.questions
    ids = that.state.ids
    //questions = [] array.splice(index, 1);
    if(ids.indexOf(item.id)==-1){
      if(ids.length==20){
        alert('You already selected 20 problems.')
      }else{
        questions.push(item)
        ids.push(item.id)
      }
    }else{
      questions.splice(ids.indexOf(item.id),1)
      ids.splice(ids.indexOf(item.id),1)
    }
    global.id = ids
    num = ids.length
    that.setState({
      questions: questions,
      ids: ids,
      progress: num*0.05
    })
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
    renderId = this.state.ids
   that = this
    jsonData = Q.map(function(item) {
      return(
          <TouchableOpacity onPress={that.clickQuestion.bind(that,item)} style={styles.selectButton} key={item.id}>
            {
              (renderId.indexOf(item.id)!=-1)?<Image source={Images.check} style={styles.check}/>
                                     :<View style={styles.check}/>
            }
            <Image source={item.question} style={styles.bird}/>
            <Image source={item.rightAnswer} style={styles.bird}/>
            <Image source={item.wrongAnswer} style={styles.bird}/>
          </TouchableOpacity>
        )
    })
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
            <Text style={styles.headerText}>Edit Main Test</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.labelView}>
              <Text style={styles.label}>Question</Text>
              <Text style={styles.label}>Right Answer</Text>
              <Text style={styles.label}>Wrong Answer</Text>
            </View>
          <ScrollView>
            {jsonData}
            {((item)&&!Number(item.question))?
              <TouchableOpacity onPress={this.clickQuestion.bind(this,Q3)} style={styles.selectButton}>
                {
                  (renderId.indexOf(Q3.id)!=-1)?<Image source={Images.check} style={styles.check}/>
                                         :<View style={styles.check}/>
                }
                <Image source={{uri:item.question}} style={styles.bird}/>
                <Image source={{uri:item.rightAns}} style={styles.bird}/>
                <Image source={{uri:item.wrongAns}} style={styles.bird}/>
              </TouchableOpacity>:null
            }
          </ScrollView>
            <Progress.Bar
              style={styles.progress}
              progress={this.state.progress}
              indeterminate={this.state.indeterminate}
            />
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
  progress:{
    marginTop:Constants.Marin*2
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
