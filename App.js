import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';
import First from './screens/First'
import Second from './screens/Second'
import Third from './screens/Third'
const AppStackNavigator = createStackNavigator({ 

  First:{
    screen: First
  },
   
  Second:{
    screen:Second
  },

  Third:{
    screen:Third
  }
},
    navigationOptions={
      headerMode:'none'
})

const App = createAppContainer(AppStackNavigator);

export default App;