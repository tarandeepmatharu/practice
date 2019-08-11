import React, { Component } from 'react';
import { Animated,View, Text,StyleSheet,Easing} from 'react-native';

export default class Animations extends Component {
  fadeAnim=new Animated.Value(0);
    constructor(props) {
    super(props);
    this.scaleX=new Animated.Value(0);
    this.scaleY=new Animated.Value(0);
    this.rotateMeX=new Animated.Value(0);
    this.state = {
      
    };
  }

  componentDidMount(){
      
      Animated.timing(this.fadeAnim,{toValue:1,duration:1000}).start(()=>{
        Animated.timing(this.scaleY,{
          toValue:50,
          duration:2000
        }).start(()=>{
          Animated.timing(this.rotateMeX,{
            toValue:1,
            duration:1000
          }).start();
        });       
      });
  
    }


    
  render() {
  
    const spin=this.rotateMeX.interpolate({
      inputRange:[0,1],
      outputRange:['0deg','180deg']
    })
    return (
      <Animated.View style={[styles.container,{opacity:this.fadeAnim}]}>
        <Animated.Text style={{color:"white",fontSize:this.scaleY,transform:[{rotateX:spin}]}}> Animations {console.log(this.rotateMeX)}</Animated.Text>
      </Animated.View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",

    }
});
