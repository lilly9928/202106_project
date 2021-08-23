
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';


import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';



function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.bottomLine}>
     <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('태양광 설치 투자 금액')}
          >
       <Text style={styles.Text}>계정:{Perference.getUser()}</Text>
       </TouchableOpacity>
       </View>
     <View style={styles.bottomLine}>
     <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('태양광 설치 투자 금액')}
          >
       <Text style={styles.Text}>태양광 설치 투자 금액</Text>
       </TouchableOpacity>
       </View>
     <View style={styles.bottomLine}>
     <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('시간대별 kW 당 발전 수익 설정')}
          >
       <Text style={styles.Text}>시간대별 kW 당 발전 수익 설정</Text>
       </TouchableOpacity>
       </View>
     <View style={styles.bottomLine}>
       <Text style={styles.Text} >정보</Text>
       <Text style={styles.TextEnd} >v1.0</Text>
        </View>
        <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}
          >
            <View style={styles.bottomText} >
        <Text>
            로그아웃
            </Text>
            </View>
            </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#fff"
  },
  bottomLine:{
    flexDirection: 'row',
  },
  Text: {
    fontSize: wp('5%'),
    paddingBottom: wp(5),
    paddingTop: wp(5),
    paddingLeft:wp(5)
  },
  bottomText:{
    alignItems:"center"
  },
  TextEnd:{
    textAlign:"right",
    fontSize: wp('5%'),
    paddingBottom: wp(5),
    paddingTop: wp(5),
    paddingLeft:wp(5)
  }
});
export default SettingScreen;