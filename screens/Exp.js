import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
export default class Exp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>hi this is exp </Text>
                <Button title="goback" onPress={()=>this.props.navigation.navigate('Home')}></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#6B52AE",
        color:"white",
        padding:15,
        marginTop:22
    },
    text:{
        color:"white",
        fontSize:30,
    }
});
