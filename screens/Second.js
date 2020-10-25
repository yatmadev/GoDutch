
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import {Card} from 'react-native-shadow-cards';

class Second extends Component{
  render(){
  return (
  <View style={styles.container}>
    <Text style={styles.title}>setup your GoDutch account</Text>
     <Card style={styles.cardContainer}>
     <Text style={styles.subTitle}>current profession</Text>
    
     <View style={styles.fixToText}>
     <TouchableOpacity style={styles.button }>
      <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRight }>
      <Text style={styles.textRight}>Professional</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.title}>full name
      <Text style={styles.starTitle}>*</Text></Text>
      <TextInput style={styles.textInput}/>

      <Text style={styles.title}>UPI ID
      <Text style={styles.starTitle}>*</Text></Text>
      <TextInput style={styles.textInput}/>
       
       <TouchableOpacity style={styles.finalButton } onPress={() => this.props.navigation.navigate('Third')}>
       <Text style={styles.finalText}>Continue</Text>
       </TouchableOpacity>
     </Card>
  </View>
    )
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'silver'
  },
  cardContainer:{
    height: "88%", 
    marginVertical: 5, 
    marginHorizontal:20
  },
  fixToText: {
    flexDirection: 'row',
    marginHorizontal:-20,
  },
  title:{
    fontSize:16,
    alignItems:'flex-start',
    marginTop:15,
    marginHorizontal:20,
    fontFamily:'MazzardH-Bold'
  },
  subTitle:{
    fontSize:16,
    fontFamily:'MazzardH-Bold',
    alignItems:'flex-start',
    marginHorizontal:20,
    marginTop:160,
    color:'black'
  },
  starTitle:{
    fontSize:16,
    fontFamily:'MazzardH-Bold',
    alignItems:'flex-start',
    marginHorizontal:30,
    marginTop:160,
    color:'red'
  },
  textInput:{
    marginTop:7,
    borderColor: 'black', 
    borderWidth: 0.8, 
    borderRadius:5, 
    marginHorizontal:18
  },
  
  button: {
    width:"38%",
    backgroundColor:"white",
    borderRadius: 3,
    marginVertical: 10,
    paddingVertical: 9,
    marginHorizontal:36,
    borderWidth:1
  },
  buttonText: {
    fontSize:17,
    color:'black',
    textAlign:'center',
    fontFamily:'NexaRegular'
  },
  buttonRight:{
    width:"38%",
    backgroundColor:"white",
    borderRadius: 3,
    marginVertical: 10,
    paddingVertical: 9,
    marginLeft:-9,
    borderWidth:1

  },
  textRight: {
    fontSize:17,
    color:'black',
    textAlign:'center',
    fontFamily:'NexaRegular'
  },
  finalButton: {
    width:"55%",
    backgroundColor:"blue",
    borderRadius: 8,
    marginVertical: 50,
    paddingVertical: 13,
    marginHorizontal:85
  },
  finalText: {
    fontSize:22,
    color:'#ffffff',
    textAlign:'center',
    fontFamily:'NexaRegular'
  },   
});

export default Second;


