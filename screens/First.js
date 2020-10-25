import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image 
} from "react-native";
import {Card} from 'react-native-shadow-cards';

class First extends Component {
  render(){
  return (
  <View style={styles.container}>
    <Card style={styles.cardContainer}>
     
     <View style={styles.smallViewContainer}>
     <Image source={require('../pictures/logo.png')} style={styles.imageContainer}/>
     <Text style={styles.headerText}>goDutch</Text>
     </View>

      <Text style={styles.title}>Mobile number <Text style={styles.subTitle}>*</Text></Text>
      
      <TextInput style={styles.textInput}/>
      
      <TouchableOpacity style={styles.button } onPress={() => this.props.navigation.navigate('Second')}>
      <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity> 

    </Card>
  </View>
    )
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'silver'
  },
  cardContainer:{
    height: "60%", 
    marginVertical: 135, 
    marginHorizontal:20
  },
  smallViewContainer:{
    flex:0.75,
    flexDirection:'row'
  },
  imageContainer:{
    marginLeft:80,
    marginTop:20,
    height:"55%", 
    width: "15%"
  },
  headerText:{
    fontFamily:'MazzardH-Black',
    fontSize:32, 
    marginTop:18
  },
  textInput:{
    borderColor: 'black', 
    borderWidth: 0.8, 
    borderRadius:5, 
    marginHorizontal:18
  },
  title:{
    fontSize:18,
    alignItems:'flex-start',
    marginTop:50,
    marginBottom:9,
    marginHorizontal:19,
    fontFamily:'MazzardH-Bold'
  },
  subTitle:{
    fontSize:17,
    color:'red',
    fontFamily:'MazzardH-Bold'
  },
  button: {
    width:"55%",
    backgroundColor:"blue",
     borderRadius: 8,
      marginVertical: 50,
      paddingVertical: 13,
      marginHorizontal:85
  },
  buttonText: {
    fontSize:22,
    color:'#ffffff',
    textAlign:'center',
    fontFamily:'NexaRegular'
  },
});

export default First;


