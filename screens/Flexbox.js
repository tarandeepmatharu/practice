import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,} from 'react-native';
export default Flexbox=()=>{
return(
    <View style={styles.vcontainer}>
    <View style={styles.container}>
        <Image source={{uri:"https://avatars0.githubusercontent.com/u/1?v=4"}} style={styles.img}></Image>
        <Text>mogambo pakore wla</Text>
    </View>
    </View>
    );
}

const styles=StyleSheet.create({
    vcontainer:{
        flex:1,
        justifyContent:"center"
    },
    container:{
         
         flexDirection:"row",
        marginTop:30,
        marginLeft:30

      },
    box:{
        height:100,
        width:100,
        backgroundColor:"red",
        margin:43
    },
    img:{
        height:100,
        width:100,
        borderRadius:50
    }
    
});
