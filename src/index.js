/**
 * Sample React Native App By Rananjaya
 * https://github.com/Rananjaya
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component{

    static navigationOptions ={
        headerTitleStyle: {    textAlign:"center", 
        flex:1 },
         headerLeft : <Icon name="camera-retro" size={30} color="black" />,
         title:"Instagram",
         headerRight : <Icon name="paper-plane" size={30} color="black" />
}


  render(){
    return(
   
      <View style={styles.container}>
            <Text>Test App</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
