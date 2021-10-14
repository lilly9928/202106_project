
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

  // //임시User데이터
  // const Userdata = [
  //   {
  //     "id": 'test1@',
  //     "password": "test1"
  //   },
  //   {
  //     "id": 'test2@',
  //     "password": "test2"
  //   },
  //   {
  //     "id": 'test3@',
  //     "password": "test3"
  //   },
  //   {
  //     "id": 'test4@',
  //     "password": "test4"
  //   },
  //   {
  //     "id": 'test5@',
  //     "password": "test5"
  //   }
  // ];
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [Errortext, setErrortext] = useState('');
  const [passwordErrortext, setpasswordErrortext] = useState('');

  const passwordInputRef = createRef();

  const Dashboard= () => {
    fetch(`http://118.131.6.218:8000/dashboard?plantId_subId=plant1_1&timestamp=2020-06-01 07:00:00`)
      .then(res => res.json())
      .then(res => {
       Perference.setDashboard(res.realGraph.Y.concat(res.predictedGraph.Y))
       Perference.setDashboardTotal(res.todayTotalRevenue)
       Perference.setDashboardToday(res.todayRevenue)
       Perference.setDashboardTodayPredicted(res.todayPredictedRevenue)
       
  })
}
const Detail= () => {
  fetch(`http://118.131.6.218:8000/detail?plantId_subId=plant1_1&timestamp=2020-06-01 07:00:00&periodType=day`)
    .then(res => res.json())
    .then(res => {
     Perference.setData(res.realPowerGraph.Y.concat(res.predictedPowerGraph.Y))
     Perference.setDataTable(res.revenueFromPowerList)
     .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      }); 
})
}
const Report= () => {
  fetch(`http://118.131.6.218:8000/report?plantId_subId=plant1_1&timestamp=2020-06-01 07:00:00`)
    .then(res => res.json())
    .then(res => {
     Perference.setReportMonthPredicted(res.predictedRevenueThisMonth)
     Perference.setReportMonthAverage(res.compareMonthAverage)
     Perference.setReportLastYearOfMonth(res.compareLastYearOfMonth)
     Perference.setReportData(res.accumulatedRevenueGraph.Real_Y.concat(res.accumulatedRevenueGraph.pred_Y))
     Perference.setReportDataTable(res.cumulativeRevenueList)
     Perference.setReportTotalRevenue(res.totalRevenue)
     Perference.setReportActualRevenue(res.actualRevenue)
     Perference.setMoney(res.userInvestment)
     
})
}
  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
     setErrortext('이메일 형식이 아닙니다');
       return (false)
   }

   const validatePassword = (password) => {
    var pwformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pwformat.test(password)) {
       return (true)
     }
     setErrortext('비밀번호 형식이 아닙니다');
       return (false)
   }

//로그인이벤트 
  const handleSubmitPress = () => {

    if (!userEmail) {
      setErrortext('이메일을 입력해주세요');
      return;
    }
    if (!userPassword) {
      setErrortext('비밀번호를 입력해주세요');
      return;
    }
    postData('http://118.131.6.218:8000/login', {id: userEmail , passwd:userPassword})
    //.then(res => res.json())
    .then(res => {
          if(res.success){
            Perference.setUser(userEmail);
            Dashboard();
            Detail();
            Report();
            navigation.navigate('이전');
           return;
          }
          else{
            setErrortext('아이디 비밀번호를 확인해주세요');
          }
        })

    //아이디 비밀번호 유효성 체크 (비밀번호는 api, 회원가입화면 개발 완료 후 주석 푸시면 됩니다)
    //validateEmail(userEmail);
    //validatePassword(userPassword);

    // for (var i = 0; i < Userdata.length; i++) {
    //   if (Userdata[i].id == userEmail) {
    //     if (Userdata[i].password == userPassword) {
    //       Perference.setUser(userEmail);
    //       Dashboard();
    //       Detail();
    //       Report();
    //       //navigation.dispatch(CommonActions.navigate("이전")); 
    //      navigation.navigate('이전');
    //       return;
    //     }
    //     else {
    //       alert('아이디 또는 비밀번호가 틀립니다.');
    //       return;
    //     }
    //   }
    // }
    // alert('아이디 또는 비밀번호가 틀립니다.');

  };
  function postData(url = '', data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native JavaScript objects
  }
  return (
    <View style={styles.container}>
     
     <View style={styles.topArea}>
        <View style={styles.titleArea}>
            <Image
            style={styles.logo}
            source={require('./Image/logo.png')}
          />
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
      </View>
      <View style={styles.TextValidation}>
      <Text style={styles.TextValidationText}>{Errortext}</Text>
      </View>
      </View>
     
        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={(styles.Text, { color: 'white' })}>로그인</Text>
          </TouchableOpacity>
        </View>
    
      <View style={{height:hp(20) }} />
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
   // flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
   // paddingLeft: wp(7),
   // paddingRight: wp(7),

  },
  logo:{
    width:wp(40),
    resizeMode: 'contain',
    marginBottom:hp(8),
    marginLeft:wp(4)

  },
  topArea: {
  //  flex: 1,
    width:fullwidth,
    paddingTop: wp(20),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    backgroundColor: "#2e2e33"
  },
  titleArea: {
   // flex: 0.7,
    justifyContent: 'center',
    paddingTop: wp(1),
    height:hp(3)
  },
  TextArea: {
    //flex: 0.3,
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
   // paddingTop: wp(10),
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"#ffecec",
    borderColor:"#ff0000",
    justifyContent:"center",
    height:hp(6),
    marginBottom:hp(3)
    
  },
  TextValidationText:{
    fontSize: wp(4),
    color: 'red',
    textAlign:"center",
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
    //flex: 5,
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