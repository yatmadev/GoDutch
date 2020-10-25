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

class Third extends Component{
  render(){
  return (
  <View style={styles.container}>
    <Text style={styles.header}>Your Details</Text>
     <Card style={styles.cardContainer}>

     <Text style={styles.title}>Name</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.name}>Priyank Ghanekar</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.mobileNo}>MobileNo</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.name}>+91 9967338128</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.mobileNo}>Upi Id</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.name}>Priyank874@ybl</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.mobileNo}>Profession</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     <Text style={styles.name}>Student</Text>
     <Text style={styles.lines}>─────────────────────────────────</Text>
     
     </Card>

     <TouchableOpacity style={styles.button } onPress={() => this.props.navigation.navigate('First')}>
     <Text style={styles.buttonText}>Continue</Text>
     </TouchableOpacity>
      
  </View>
    )
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'silver'
  },
  header:{
    fontSize:16,
    alignItems:'flex-start',
    marginTop:23,
    marginHorizontal:40,
    fontFamily:'MazzardH-Bold'
  },
  cardContainer:{
    height: "73%", 
    marginVertical: 10, 
    marginHorizontal:20
  },
  title:{
    fontSize:16,
    alignItems:'flex-start',
    marginTop:23,
    marginHorizontal:30,
    fontFamily:'MazzardH-Bold'
  },
  mobileNo:{
    fontSize:16,
    alignItems:'flex-start',
    marginHorizontal:30,
    fontFamily:'MazzardH-Bold'
  },
  subTitle:{
    fontSize:16,
    color:'red',
    fontFamily:'MazzardH-Bold'
  },
  button: {
    width:"55%",
    backgroundColor:"#5a67f2",
    borderRadius: 8,
    marginVertical: 30,
    paddingVertical: 13,
    marginHorizontal:85
  },
  buttonText: {
    fontSize:22,
    color:'#ffffff',
    textAlign:'center',
    fontFamily:'NexaRegular'
  },
  lines:{
    marginHorizontal:20,
    marginVertical:7,
    color:'silver'
  },
  name:{
    color:'#5a67f2',
    fontSize:16,
    alignItems:'flex-start',
    marginTop:2,
    marginHorizontal:30,
    fontFamily:'MazzardH-Bold'
  },
});

export default Third;
