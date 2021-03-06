/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ListPage from './list-view';
import SendIntentAndroid from 'react-native-send-intent';
import {spring, Motion} from 'react-motion/native';
import Dim from 'Dimensions';
import Navbar from './nav-bar';
import Strings from './localization';
import SimpleAlert from 'react-native-simpledialog-android';


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

const LaunchURL = (url) => {
  SimpleAlert.alert(
      Strings['Call'],
      'Call?', [
        { type: SimpleAlert.POSITIVE_BUTTON, text: 'Yes', onPress: ()=> {
          SendIntentAndroid.sendPhoneCall(url);
        } },
        { type: SimpleAlert.NEGATIVE_BUTTON, text: 'No' },
      ]
  );
};

const width = Dim.get('window').width;
const height = Dim.get('window').height;

class Tawari extends Component{
  constructor(props){
    super(props);
    this.state = {
      curIdx: 0,
    };
  }
  handleChange(idx){
    this.setState({
      curIdx: idx,
    });
  }
  render() {
    const Em = ListPage('e', LaunchURL);
    const Re = ListPage('r', LaunchURL);
    const In = ListPage('i', LaunchURL);
    let CurView;
    if (this.state.curIdx === 0) {
      CurView = Em;
    } else if (this.state.curIdx === 1) {
      CurView = Re;
    } else {
      CurView = In
    }
    return (

      <View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column', height: height}}>
        <View style={{backgroundColor: '#75939A', height: height - 88}}><CurView /></View>
        <Navbar items={[{title: Strings['Emergencies'], icon: 'fontawesome|warning'}, {title: Strings['Interruptions'], icon: 'fontawesome|wrench'}, {title: Strings['Reports'], icon: 'fontawesome|bullhorn'}]} indexChanged={this.handleChange.bind(this)}/>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Tawari', () => Tawari);
