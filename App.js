import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import FriendRequests from './screens/FriendRequest';
import Rne from './screens/Rne';

import Firebase from './screens/Firebase';
import Exp from './screens/Exp';
import UserProfile from './screens/UserProfile';

const StackNavigator=createStackNavigator({
  Home:{screen:FriendRequests},
  Rne:{screen:Rne},
  Firebase:{screen:Firebase},
  User:{screen:UserProfile}
},{
 
initialRouteName:'User',
defaultNavigationOptions:{
  header:null
}
});

const AppContainer=createAppContainer(StackNavigator);
export default class App extends Component{
render(){
  return(
   <AppContainer/>
  );
}
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});