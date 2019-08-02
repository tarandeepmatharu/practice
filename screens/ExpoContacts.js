import React,{Component} from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';


export default class ExpoContacts extends Component{
componentDidMount(){
    this.queryContact();
}
queryContact=async ()=>{
    const {status}=await Permissions.askAsync(Permissions.CONTACTS).catch((err)=>console.log(err));
   
    if(status=='granted'){
        Alert.alert("permission granted");
    }
    else{
        Alert.alert("permission not granted");
    }
     await Contacts.getContactsAsync({fields:[Contacts.PHONE_NUMBERS]}).then((response)=>{
    console.log("contacts");
   }).catch((err)=>console.log(err));
  
}
    render(){
    return(
        <View style={styles.container}>
            <Text>
             hi there this is contacts screen
            </Text>
        </View>
    );


}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});