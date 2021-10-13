
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import Perference from './Perference';
import axios from 'axios';
import Styled from "styled-components/native"

import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

import styled from 'styled-components/native'
//import AsyncStorage from '@react-native-community/async-storage';
var fullwidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {

  //임시User데이터
  const Userdata = [
    {
      "id": 'test1@',
      "password": "test1"
    },
    {
      "id": 'test2@',
      "password": "test2"
    },
    {
      "id": 'test3@',
      "password": "test3"
    },
    {
      "id": 'test4@',
      "password": "test4"
    },
    {
      "id": 'test5@',
      "password": "test5"
    }
  ];
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailErrortext, setemailErrortext] = useState('');
  const [passwordErrortext, setpasswordErrortext] = useState('');

  const passwordInputRef = createRef();

  const Dashboard= () => {
    fetch(`http://10.0.2.2:8081/data/dashboard.json`)
      .then(res => res.json())
      .then(res => {
       Perference.setDashboard(res.data.realGraph.y.concat(res.data.predictedGraph.y))
       Perference.setDashboardTotal(res.data.todayTotalRevenue)
       Perference.setDashboardToday(res.data.todayRevenue)
       Perference.setDashboardTodayPredicted(res.data.todayPredictedRevenue)
       
  })
}
const Detail= () => {
  fetch(`http://10.0.2.2:8081/data/detail.json`)
    .then(res => res.json())
    .then(res => {
     Perference.setData(res.data.realPowerGraph.y.concat(res.data.predictedPowerGraph.y))
     Perference.setDataTable(res.data.table)
    
     
})
}
const Report= () => {
  fetch(`http://10.0.2.2:8081/data/report.json`)
    .then(res => res.json())
    .then(res => {
     Perference.setReportMonthPredicted(res.predictedRevenue.predictedRevenueThisMonth)
     Perference.setReportMonthAverage(res.predictedRevenue.compareMonthAverage)
     Perference.setReportLastYearOfMonth(res.predictedRevenue.compareLastYearOfMonth)
     Perference.setReportData(res.data.accumulatedRevenueGraph.realY.concat(res.data.accumulatedRevenueGraph.predictedY))
     Perference.setReportDataTable(res.data.table)
     Perference.setReportTotalRevenue(res.data.realRevenue.totalRevenue)
     Perference.setReportActualRevenue(res.data.realRevenue.actualRevenue)
     Perference.setMoney(res.data.realRevenue.userInvestment)
     
})
}
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
     setemailErrortext('이메일 형식이 아닙니다');
       return (false)
   }

   const validatePassword = (password) => {
    var pwformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pwformat.test(password)) {
       return (true)
     }
     setpasswordErrortext('비밀번호 형식이 아닙니다');
       return (false)
   }

//로그인이벤트 
  const handleSubmitPress = () => {

    if (!userEmail) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!userPassword) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    //아이디 비밀번호 유효성 체크 (비밀번호는 api, 회원가입화면 개발 완료 후 주석 푸시면 됩니다)
    validateEmail(userEmail);
    //validatePassword(userPassword);

    for (var i = 0; i < Userdata.length; i++) {
      if (Userdata[i].id == userEmail) {
        if (Userdata[i].password == userPassword) {
          Perference.setUser(userEmail);
          Dashboard();
          Detail();
          Report();
          //navigation.dispatch(CommonActions.navigate("이전")); 
         navigation.navigate('이전');
          return;
        }
        else {
          alert('아이디 또는 비밀번호가 틀립니다.');
          return;
        }
      }
    }
    alert('아이디 또는 비밀번호가 틀립니다.');

  };

  return (
    <View style={styles.container}>
     
     <View style={styles.topArea}>
        <View style={styles.titleArea}>
          <Text style={(styles.Text, { color: 'white' })}>탄소배출AI</Text>
        </View>
      </View>

      <View style={styles.formArea}>
        <View style={styles.inputArea}>
        <Text style={styles.Text}>아이디</Text>
        <TextInput
          style={styles.textFormTop}
          placeholder={'이메일을 입력'}
          onChangeText={(userEmail) => setUserEmail(userEmail)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        </View>
        <View style={styles.inputArea}>
        <Text style={styles.Text}>비밀번호</Text>
        <TextInput
          style={styles.textFormBottom}
          placeholder={'입력하세요'}
          onChangeText={(userPassword) => setUserPassword(userPassword)}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        />
        <Text style={styles.TextValidation}>{emailErrortext}</Text>
        <Text style={styles.TextValidation}>{passwordErrortext}</Text>
      </View>
      </View>
      <View style={{ flex: 0.68 }}>
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={(styles.Text, { color: 'white' })}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3 }} />
    </View>
  );
};

// export const TopArea = styled.View`
//     width: 720,
//     height: 190,
//     borderRadius: 48,
//     backgroundColor: "#2e2e33"
// `

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
   // paddingLeft: wp(7),
   // paddingRight: wp(7),

  },
  topArea: {
    flex: 1,
    width:fullwidth,
    paddingTop: wp(20),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    backgroundColor: "#2e2e33"
  },
  titleArea: {
    flex: 0.7,
    justifyContent: 'center',
    paddingTop: wp(1),
  },
  TextArea: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Text: {
    fontSize: wp('4%'),
    paddingBottom: wp(5),
    paddingTop: wp(5),
    color:'#909090',
    paddingLeft:wp(3)
  },
  TextValidation: {
    fontSize: wp('4%'),
    color: 'red',
    paddingTop: wp(2),
  },
  inputArea:{
    flexDirection: "row",
    backgroundColor:'#ffffff',
    borderRadius:16,
    width: '100%',
    height: hp(10),
    marginBottom:wp(5)
  },

  formArea: {
    justifyContent: 'center',
    paddingTop: wp(20),
    flex: 5,
    paddingLeft: wp(7),
    paddingRight: wp(7),
  },
  textFormTop: {
    width: '50%',
    height: hp(10),
    paddingLeft: 30,
    paddingRight: 10,
    borderWidth:0,
    backgroundColor:'#ffffff',
    borderRadius:16,
    color:'#909090',
    fontSize: wp('4%'),

  },
  textFormBottom: {
    width: '50%',
    height: hp(10),
    paddingLeft: 30,
    paddingRight: 10,
    borderWidth:0,
    backgroundColor:'#ffffff',
    borderRadius:16,
    color:'#909090',
    fontSize: wp('4%'),
  },
  btnArea: {
    height: hp(10),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    paddingLeft: wp(7),
    paddingRight: wp(7),
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',

  },
});
export default LoginScreen;