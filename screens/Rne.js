import React from 'react';
import {StyleSheet, Text, View,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {Avatar,ListItem} from 'react-native-elements';
export default class Rne extends React.Component{
constructor(props){
  super(props);
  this.state={
    users:[]
  }
}
componentWillMount(){
  this.fetchUsers();
  console.log("fetchusers called");
}

fetchUsers(){
 
  fetch("https://api.github.com/users").then((response)=>{
    return response.json();
  }).then((response)=>{
      this.setState({users:response});
  }).catch(err=>console.log(err));
}
  render(){
    return(
      <View style={styles.container}>
         <FlatList 
         data={this.state.users}
         renderItem={({item})=>{
            return(
             
            <TouchableOpacity style={styles.touchable}>
              <ListItem 
              containerStyle={{borderRadius:20,marginTop:5}}
          leftAvatar={{source:{uri:item.avatar_url},showEditButton:true}}
          title={item.login}
          badge={{ value: item.id, textStyle: { color: 'white' }, containerStyle: { marginTop: -20},status:"warning",badgeStyle:{backgroundColor:"blue",padding:8,borderRadius:50}}}
          bottomDivider={true}
          pad={20}
          Component={TouchableScale}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors:
            ['#FF9800','#F44336'],
            start:[1,0],
            end:[0.2,0]
          }}
          chevronColor="white"
          chevron
          />
          </TouchableOpacity>
         
            );
         }}
         keyExtractor={(value,index)=>index.toString()}
         />
         </View>
      
        );
  }
  
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   marginTop:35
   
  },
  touchable:{
    borderRadius:10
  }
});
