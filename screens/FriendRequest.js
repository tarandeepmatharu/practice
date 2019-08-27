import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView,FlatList,Image,TouchableOpacity} from 'react-native';
import {Card,Button,Icon} from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons'
import Exp from './Exp';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

export default class FriendRequest extends Component{
  
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    static navigationOptions=({navigation})=>{
            return {
               header:<Exp/>
            }
        }

        
    
    componentWillMount(){
        this.fetchUsers();
    }
    fetchUsers(){
   
        fetch("https://api.github.com/users").then((response)=>{
          return response.json();
        }).then((response)=>{
            this.setState({data:response});
        }).catch();
     }

     removeUser=(id)=>{
         var edited=this.state.data.filter((value,index)=>{
             return value.id!=id;
         });
         this.setState({data:edited});
         
     }

    render(){
        return(
            <View style={styles.container}>
            
               <FlatList 
                data={this.state.data}
                renderItem={({item})=>{
                    return(
                        <Card  containerStyle={{width:wp(70),height:wp(100),borderRadius:10,padding:0}}
                        
                        >
                            <Image source={{uri:item.avatar_url}} style={styles.image}/>
                            <Text style={styles.name}>{item.login.capitalize()}</Text>
                           <View style={styles.buttonContainer}>
                            <Button icon={<AntDesign name="adduser" size={25} color="white"/>} title="Add friend"/>
                            <Button title="Remove" buttonStyle={{backgroundColor:"#E5E6E8"}} titleStyle={{color:"black",opacity:1}} onPress={()=>{this.removeUser(item.id)}}/>
                            </View>
                           </Card> 
                    )
                }}
                keyExtractor={(item)=>item.login}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
               />
               
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Firebase')}><Text style={{color:"white",padding:20,backgroundColor:"blue"}}>goto firebase</Text></TouchableOpacity>
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
    name:{
        fontSize:20,
        marginLeft:wp(2),
        marginTop:10,
        marginBottom:25
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        borderWidth:3,
        marginBottom:0
    },
    image:{
        height:hp(30),
       borderTopLeftRadius:5,
       borderTopRightRadius:5
    }
    
})