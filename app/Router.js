import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from './components/Scenes/Home';
import Instructions from './components/Scenes/Instructions';
import Createquestions from './components/Scenes/Createquestions';
import Startgame from './components/Scenes/Startgame';
import MainTestEntrance from './components/Scenes/MainTestEntrance';
import Test from './components/Scenes/Test';
import ChildCreate from './components/Scenes/ChildCreate';
import ChildrenList from './components/Scenes/ChildrenList';
import About from './components/Scenes/About';
import Checkboard from './components/Scenes/Checkboard';
//Define pages for react-native-router-flux
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main" hideNavBar duration={0}>
          <Scene key="home" component={Home} initial />
          <Scene key="instructions" component={Instructions} />
          <Scene key="createquestions" component={Createquestions} />
          <Scene key="child-create" component={ChildCreate} />
          <Scene key="main-test-entrance" component={MainTestEntrance} />
          <Scene key="children-list" component={ChildrenList} />
          <Scene key="about" component={About} />
          <Scene key="startgame" component={Startgame} />
          <Scene key="checkboard" component={Checkboard} />
        </Scene>
        <Scene key="test" component={Test} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
