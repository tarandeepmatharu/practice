import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import * as firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyDn0FB15bquRDeYlx4mX1tB2jbnugKqnUg",
    authDomain: "practicefirebase-280d6.firebaseapp.com",
    databaseURL: "https://practicefirebase-280d6.firebaseio.com",
    projectId: "practicefirebase-280d6",
    storageBucket: "",
    messagingSenderId: "793125343339",
    appId: "1:793125343339:web:183e1acd65c5eb84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const user={
  email:"tarandeepmatharu922@gmail.com",
  password:"tarandeep@98"
}

const provider= new firebase.auth.GoogleAuthProvider();

  export default class Firebase extends Component{
    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          console.log("we are authenticated");
        }
        else{
          console.log("user is not authenticated");
        }
      }); 
    }
    signInWithGoogle=()=>{
      firebase.auth().signInWithPopup(provider).then((res)=>{
        const user = res.user;
        console.log(user);
      }).catch((error)=>{
        console.error(error.message);
      })

    }
   signUp=()=>{
     const {email,password}=user;
     firebase.auth().createUserWithEmailAndPassword(email,password).catch((error)=>console.error(error));
   }
    signIn=()=>{
      const {email,password}=user;
     firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=>{console.error(error)})
     
     
    }
    signOut=()=>{
      firebase.auth().signOut().catch((er)=>console.error(err));
      console.log("signed out successfully");
    }
   
    render(){
      return(
        <View style={styles.container}>
          <Button title="Sign Up" onPress={()=>this.signUp()} />
          <View style={{marginTop:30}}></View>
          <Button title="Sign In" onPress={()=>this.signIn()}/>
          <View style={{marginTop:30}}></View>
          <Button title="Sign Out" onPress={()=>this.signOut()}/>
          <View style={{marginTop:30}}></View>
          <Button title="SignIn With Google" onPress={()=>this.signInWithGoogle()}/>
          <Text>firebase screen</Text>
        </View>
      );
    }
  }

  const styles=StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center"
    },
    buton:{
      marginBottom:20
    }
  });