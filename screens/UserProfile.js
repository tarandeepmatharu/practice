import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
      <View>
    <View style={styles.profileBackgroundWrapper}>
      <Image source={require('../assets/background.png')} style={styles.backgroundImage}></Image>
      </View>
      <View style={styles.infoContainer}>
          <View style={styles.menuIconAndName}>
         <AntDesign name="menufold" size={26} color="white" />
         <Text style={styles.text}>Kalories Rank</Text>
         </View>
         <Text style={{color:"white",position:'absolute',top:70,left:30,fontSize:19,}}>No.1</Text>
         <View style={styles.dpInfoContainer}>
             <Image source={require('../assets/sampleProfile.jpg')} style={styles.profilePicture}/>
             <Text style={styles.userName}>Jessica Chues</Text>
             <Text style={styles.userFatInfo}>Reduced fat</Text>
        </View>
        <View style={styles.fatAnalyticsContainer}>
            <View style={styles.fatAnalytics}>
            <Text style={styles.fatAnalyticsInfo}>157980</Text>
            <Text style={{color:"white",fontSize:12,alignSelf:'center'}}>Shape</Text>
            </View>

            <View style={styles.fatAnalytics}>
            <Text style={styles.fatAnalyticsInfo}>89020</Text>
            <Text style={{color:"white",fontSize:12,alignSelf:'center'}}>minutes</Text>
            </View>

            <View style={styles.fatAnalytics}>
            <Text style={styles.fatAnalyticsInfo}>55000</Text>
            <Text style={{color:"white",fontSize:12,alignSelf:'center'}}>metres</Text>
            </View>

            <View style={styles.fatAnalytics}>
            <Text style={styles.fatAnalyticsInfo}>7020</Text>
            <Text style={{color:"white",fontSize:12,alignSelf:'center'}}>calories</Text>
            </View>

            <View style={styles.fatAnalytics}>
            <Text style={styles.fatAnalyticsInfo}>25</Text>
            <Text style={{color:"white",fontSize:12,alignSelf:'center'}}>milli</Text>
            </View>
        </View>
      </View>
      </View>
    
    );
  }
}

const styles=StyleSheet.create({
   
    backgroundImage:{
        width:400,
    },
    profileBackgroundWrapper:{
        marginTop:-270
    },
    infoContainer:{
        height:300,
        width:400,
       borderColor:"red",
        zIndex:10,        
        position:'absolute',
        top:25,
    },
    menuIconAndName:{
       
        marginTop:5,
        marginLeft:5,
        flexDirection:"row"
    },
    text:{
        marginLeft:100,
        color:"white",
        fontSize:20,

    },
    profilePicture:{
        borderRadius:50,
        width:90,
        height:90,
        
        borderWidth:4,
        borderColor:"white"
    },
    dpInfoContainer:{
        alignSelf:'center',
        marginTop:30
    },
   userName:{
        color:"white",
        marginTop:10,
        marginLeft:-20,     
        fontSize:18
    },
    userFatInfo:{
        color:"white",
        fontSize:15,
        marginTop:5,

    },
    fatAnalyticsContainer:{
        flexDirection:"row",
        marginTop:30
    },
    fatAnalytics:{
        marginLeft:29
    },
    fatAnalyticsInfo:{
        color:"white",
        fontSize:16,
        alignSelf:'center',
        fontWeight:"bold"
    }
});