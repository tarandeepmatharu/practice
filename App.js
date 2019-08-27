import React,{Component} from 'react';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import FriendRequests from './screens/FriendRequest';
import Rne from './screens/Rne';
import Animations from './screens/Animations';
import Firebase from './screens/Firebase';
import Exp from './screens/Exp';
import UserProfile from './screens/UserProfile';
import WhatsappAnimation from './screens/WhatsappAnimation';
import DeckSwiper from './screens/DeckSwiper';
const DrawerNavigator=createDrawerNavigator({
  Home:{screen:FriendRequests},
  Rne:{screen:Rne},
  Firebase:{screen:Firebase},
  User:{screen:UserProfile},
  Anim:{screen:Animations},
  WA:{screen:WhatsappAnimation},
  DS:{screen:DeckSwiper}
},{
 
initialRouteName:'DS'
});

const AppContainer=createAppContainer(DrawerNavigator);
export default class App extends Component{
render(){
  return(
   <AppContainer/>
  );
}
}


