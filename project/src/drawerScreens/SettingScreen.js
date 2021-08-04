
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import 'react-native-gesture-handler';


import {
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';



function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     <View></View>
     <View></View>
     <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#fff"
  },
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.8,
    backgroundColor:"#fff",
    padding: '1%',
  },
  middleContainer: {
    flex: 1,
    backgroundColor:"#fff",
    padding: '1%'
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor:"#fff",
    padding: '1%'
  },
  tailContainer: {
    flex: 0.4,
  },
  Box: {
    borderColor: "#000",
    //width:"100%",
    height: "100%",
    borderWidth: 1,
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
    paddingRight: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),

  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  middleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleText: {
    fontSize: wp('6%'),
    paddingLeft: wp(1),
    paddingBottom: wp(5),
    paddingTop: wp(1),
    fontWeight: "bold"
  },
  bottomBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: wp('3%'),
    paddingLeft: wp(2),
    paddingTop: wp(1),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%"
  },
  colorBox: {
    width: 10,
    height: 10,
    backgroundColor: "#000"

  }
});
export default SettingScreen;