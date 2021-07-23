import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';
//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DetailScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    {/* <ScrollView> */}
    <View style={[styles.headContainer, { backgroundColor: "#FF3366" }]}></View>
    <View style={styles.topContainer}>
    <TouchableOpacity style={styles.topBtn}>
    <Text style={(styles.topBtnText)}> 전 </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.topBtn}>
    <Text style={(styles.topBtnText)}> 후 </Text>
          </TouchableOpacity>
      </View> 
    <View style={styles.middleContainer}>
      
    </View>
    <View style={[styles.quarterHeight, { backgroundColor: "#CCC" }]} />
    {/* </ScrollView> */}
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.2,
    //backgroundColor: "#CCC",
    borderBottomColor:'#000',
    borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
   middleContainer: {
    flex: 1,
   // backgroundColor: "#000",
  },
  quarterHeight: {
    flex: 0.4,
    backgroundColor: "#000",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  topBtn:{
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: wp('1%'),
    marginBottom: wp('1%'),

  },
  topBtnText:{
    color:'#ffffff',
  
  }
});
export default DetailScreen;