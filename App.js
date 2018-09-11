import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppTabNavigator from './Components/MainScreen';
import SplashScreen from './Components/SplashScreen';

const AppStackNavigator = StackNavigator({
  Main: {
    screen: AppTabNavigator,
    navigationOptions : {
      header: null
    }
  }
})

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          currentScreen: 'Splash'
      };
      setTimeout(()=>{
          this.setState({currentScreen : 'Main'});
      },2000);
  }
  render(){
      const { currentScreen } = this.state;
      let mainScreen = currentScreen === 'Splash' ? <SplashScreen /> : <AppStackNavigator />;
      return mainScreen;
  }

}

