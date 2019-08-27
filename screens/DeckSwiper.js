import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , FlatList ,PanResponder, Animated} from 'react-native';
import {Card} from 'react-native-elements';

const AnimatedCard=Animated.createAnimatedComponent(Card);
export default class DeckSwiper extends Component {
  constructor(props) {
    super(props);
    this.position=new Animated.ValueXY();
    this.state = {
        Data:[]
    };
     this.positionX=0;
     this.positionY=0;
    

  }

  componentWillMount(){
  this.fetchUsers();
  this.PanResponder=PanResponder.create({
      onStartShouldSetPanResponder:(e,gestureState)=>true,
      onPanResponderMove:(e,gestureState)=>{
          this.position.setValue({x:gestureState.dx,y:gestureState.dy});
         
      }
  });
   
 }

  

fetchUsers(){
   
     fetch("https://api.github.com/users").then((response)=>{
      return response.json();
    }).then((response)=>{
    this.setState({Data:response});
    console.log("fetchusers called");
        
    }).catch();
   
 }


  render() {
    return (
       
      <View style={styles.container}>
          {
              this.state.Data.map((item,index)=>{
                    return(
                        <AnimatedCard containerStyle={[{padding:0,position:'absolute',width:'90%'},{transform:this.position.getTranslateTransform()}]} key={index}
                        {...this.PanResponder.panHandlers}
                        >
              <View style={styles.cardHeader}>
                  <Image source={{uri:item.avatar_url,height:80,width:80}} style={{borderRadius:40}}/>
                    <Text style={{alignSelf:'center',marginLeft:10,fontSize:20}}>mojombo</Text>
              </View>
       
                               <Image source={{uri:item.avatar_url,height:300,width:'100%'}}/>
                     </AnimatedCard>
                    );
              }).reverse()
          }
        </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        marginTop:30
    },
    cardHeader:{
        flexDirection:"row",
        marginTop:10,
        marginBottom:20,
        paddingLeft:15
    }
    
});
