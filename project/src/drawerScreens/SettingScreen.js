
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
      <View style={styles.roundHead}/>
        <View style={styles.topInfo}>
          <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('태양광 설치 투자 금액')}
                >
            <Text style={styles.topInfoText}>안녕하세요.{Perference.getUser()}님</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.btnWrap}>
            <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('태양광 설치 투자 금액')}
                >
              <View style={styles.btnStyle}>
                <Text style={styles.Text}>태양광 설치 투자 금액</Text>
                <Text style={styles.Text}>&gt;</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('시간대별 kW 당 발전 수익 설정')}
                >
              <View style={styles.btnStyle}>
                  <Text style={styles.Text}>시간대별 kW 당 발전 수익 설정</Text>
                  <Text style={styles.Text}>&gt;</Text>
              </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}
          >
                  <View style={styles.bottomText} >
                    <Text>로그아웃</Text>
                  </View>
        </TouchableOpacity>
            <Text style={styles.smallText} >앱 버전 v1.0</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#f5f5f5"
  },
  smallText:{
    textAlign:'center',
    paddingTop:wp(2)
  },
  roundHead:{
    backgroundColor:"#2e2e33",
    width:'100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    height:wp(4)
  },
  btnStyle:{
    flexDirection: 'row',
    borderRadius:20,
    borderStyle:'solid',
    width:'100%',
    height:hp(12),
    backgroundColor: "#ffffff",
    marginBottom:hp(3),
    borderColor:'#c9c9c9',
    borderWidth:1,
    justifyContent:'space-between',
    paddingRight:wp(5),
    
  },
  btn:{
    paddingLeft: wp(40),
    paddingRight: wp(40),
    marginTop:hp(15)
    
  },
  topInfo:{
    flexDirection: 'row',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    borderStyle:'solid',
    width:'100%',
    height:hp(13),
    backgroundColor: "#ffffff",
    marginBottom:hp(3),
    justifyContent:'center',
  },
  topInfoText:{
    fontSize: wp(4),
    paddingTop: wp(7),
  },
  
  Text: {
    fontSize: wp(4.5),
    paddingBottom: wp(5),
    paddingTop: wp(7),
    paddingLeft:wp(5)
  },
  bottomText:{
    alignItems:"center",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#2e2e33",
    borderRadius:16,
    paddingBottom:hp(2),
    paddingTop:hp(2),
   
  },
  TextEnd:{
    textAlign:"right",
    fontSize: wp('5%'),
    paddingBottom: wp(5),
    paddingTop: wp(5),
    paddingLeft:wp(5)
  },
  btnWrap:{
    paddingLeft: wp(5),
    paddingRight: wp(5),
  }
});
export default SettingScreen;