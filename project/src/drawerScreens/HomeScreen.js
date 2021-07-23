import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
//import RNPickerSelect from 'react-native-picker-select';
//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

function HomeScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.headContainer, { backgroundColor: "#FF3366" }]}></View>
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>오늘의 수익</Text>
            <Text style={styles.Boxsubtitle}>날짜</Text>
          </View>
          <View style={styles.middleBox}>
          <Text style={styles.middleText}>오늘의 수익</Text>
          </View>
          <View style={styles.bottomBox}>
            <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>오늘의 수익</Text>
          <Text style={styles.bottomText}>오늘의 수익</Text>
            </View>
            <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>오늘의 수익</Text>
          <Text style={styles.bottomText}>오늘의 수익</Text>
            </View>
         
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>시간대별 수익 그래프</Text>
            <Text style={styles.Boxsubtitle}>그래프 클릭 금액</Text>
          </View>
          {/* <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer> */}
        </View>
      </View>
      <View style={styles.bottomContainer} >
        <View style={styles.Box}>

        </View>
      </View>
      <View style={[styles.tailContainer, { backgroundColor: "#FF3366" }]}>

      </View>
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
    flex: 0.8,
    //backgroundColor: "#FF3366",
    padding: '1%'
  },
  middleContainer: {
    flex: 1,
    // backgroundColor: "#000",
    padding: '1%'
  },
  bottomContainer: {
    flex: 0.4,
    //backgroundColor: "#000",
    padding: '1%'
  },
  tailContainer: {
    flex: 0.4,
    backgroundColor: "#000",
  },
  Box: {
    borderColor: "#000",
    //width:"100%",
    height: "100%",
    borderWidth: 2,
    margin: 'auto'

  },
  Boxtitle: {
    fontSize: wp('5%'),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold"
  },
  Boxsubtitle: {
    fontSize: wp('3%'),
    paddingRight:wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop:  wp('2%'),

  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  middleBox:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleText:{
    fontSize: wp('6%'),
    paddingLeft: wp(1),
    paddingBottom: wp(5),
    paddingTop: wp(1),
    fontWeight: "bold"
  },
  bottomBox:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText:{
    fontSize: wp('3%'),
    paddingLeft: wp(2),
    paddingTop: wp(1),
  },
  bottomRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:"50%"
  }
});
export default HomeScreen;