import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import FriendRequests from './screens/FriendRequest';
import Rne from './screens/Rne';
import Flexbox from './screens/Flexbox';
import Firebase from './screens/Firebase';
import Exp from './screens/Exp';

const StackNavigator=createStackNavigator({
  Home:{screen:FriendRequests},
  Rne:{screen:Rne},
  Flexbox:{screen:Flexbox},
  Firebase:{screen:Firebase}
},{
initialRouteName:'Home',

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