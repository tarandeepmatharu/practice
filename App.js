import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import FriendRequests from './screens/FriendRequest';
import Rne from './screens/Rne';
import Animations from './screens/Animations';
import Firebase from './screens/Firebase';
import Exp from './screens/Exp';
import UserProfile from './screens/UserProfile';

const SwitchNavigator=createSwitchNavigator({
  Home:{screen:FriendRequests},
  Rne:{screen:Rne},
  Firebase:{screen:Firebase},
  User:{screen:UserProfile},
  Anim:{screen:Animations}
},{
 
initialRouteName:'Anim'
});

const AppContainer=createAppContainer(SwitchNavigator);
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