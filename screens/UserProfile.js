import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native';
import {AntDesign,Ionicons} from '@expo/vector-icons';



export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  bugfix=()=>{
      console.log("bugfix");
  }
 issuefix=()=>{
     console.log("issuefix");
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
             <Text style={styles.userName}>js essica Jones</Text>
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

        <ScrollView contentContainerStyle={{marginTop:20,borderColor:"red"}}>
      <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.2</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
            
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.3</Text>
            <Image source={require('../assets/johndoe.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>John doe</Text>
                <Text style={styles.usersImproveText}>Build Muscle</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.4</Text>
            <Image source={require('../assets/johndoe.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jane Doe</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.5</Text>
            <Image source={require('../assets/girl.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}> 
                <Text style={styles.usersName}>Priscilla chan</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.6</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Tiffany</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.7</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.8</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.9</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.2</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>

        <View style={styles.usersListContainer}>
        <Text style={styles.usersRankText}>No.2</Text>
            <Image source={require('../assets/sampleProfile.jpg')} style={styles.usersListImage}/>
            <View style={styles.usersInfoWrapper}>
                <Text style={styles.usersName}>Jessica chues</Text>
                <Text style={styles.usersImproveText}>Lose fat</Text>
            </View>
        </View>
        <View style={{height:400}}>
            </View>
        </ScrollView>
      </View>
    
    );
  }
}

const styles=StyleSheet.create({
   
    backgroundImage:{
        width:450,
        marginLeft:-20
        
    
    },
    profileBackgroundWrapper:{
        marginTop:-240
    },
    infoContainer:{
        height:300,
        width:400,
       borderColor:"red",
        zIndex:10,        
        position:'absolute',
        top:40,
        left:7
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
    },
    usersListContainer:{
        flexDirection:"row",
        borderColor:"#eaeaea",
        borderWidth:1,
        padding:9,
        margin:10,
        marginTop:30,
        borderRadius:5
           
    },
    usersRankText:{
        color:"#60C3F9",
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold'
    
    },
    usersListImage:{
        borderRadius:50,
        height:90,
        width:90,
        marginLeft:20

       
    },
    usersInfoWrapper:{
        marginTop:10,
        marginLeft:20

    },
    usersName:{
        fontWeight:'bold'
    },
    usersImproveText:{
        alignSelf:'center'
    }
});