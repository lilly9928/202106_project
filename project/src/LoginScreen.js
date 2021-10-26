
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import Perference from './Perference';

import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Login } from './styles/styles'


const LoginScreen = ({ navigation }) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [Errortext, setErrortext] = useState('');
  //날짜 임의로 데이터가 있는 구간으로 변경
  let TodayConvert = Perference.getConvertToday();
  //alert(TodayConvert);
  const passwordInputRef = createRef();

  const query = (params) => {
    return Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
  }

  const Dashboard = () => {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/dashboard?' + query(params);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        Perference.setDashboard(res.realGraph.Y.concat(res.predictedGraph.Y))
        Perference.setDashboardTotal(res.todayTotalRevenue)
        Perference.setDashboardToday(res.todayRevenue)
        Perference.setDashboardTodayPredicted(res.todayPredictedRevenue)
        Perference.setDashboardCountReal(res.realGraph.Y)

      })
  }
  const Detail = () => {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert, "periodType": "day" };
    let url = 'http://118.131.6.218:8000/detail?' + query(params);
    console.log('login' + url)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        //Perference.setData(res.realPowerGraph.Y.concat(res.predictedPowerGraph.Y))
        Perference.setRealData(res.realPowerGraph)
        Perference.setPredictData(res.predictedPowerGraph)
        Perference.setDataTable(res.revenueFromPowerList)
        Perference.setDataCountReal(res.realPowerGraph.Y)
        //Perference.setDetailXData(res.realPowerGraph.X.concat(res.predictedPowerGraph.X))
      })
  }
  const Report = () => {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/report?' + query(params);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        Perference.setReportMonthPredicted(res.predictedRevenueThisMonth)
        Perference.setReportMonthAverage(res.compareMonthAverage)
        Perference.setReportLastYearOfMonth(res.compareLastYearOfMonth)
        Perference.setReportData(res.accumulatedRevenueGraph.Real_Y.concat(res.accumulatedRevenueGraph.pred_Y))
        Perference.setReportDataTable(res.cumulativeRevenueList)
        Perference.setReportIndexUserInvestment(res.userInvestment)
        Perference.setReportTotalRevenue(res.totalRevenue)
        Perference.setReportActualRevenue(res.actualRevenue)
        Perference.setMoney(res.userInvestment)

      })
  }

  const Users = () => {
    let url = 'http://118.131.6.218:8000/user/list'
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.subUserList);
        Perference.setUsers(res.subUserList)
      })
  }

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
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
    postData('http://118.131.6.218:8000/login', { id: userEmail, passwd: userPassword })
      //.then(res => res.json())
      .then(res => {
        if (res.success) {
          Perference.setUser(userEmail);
          Dashboard();
          Detail();
          Report();
          Users();
          navigation.navigate('이전');
          return;
        }
        else {
          setErrortext('아이디 비밀번호를 확인해주세요');
        }
      })

    //아이디 비밀번호 유효성 체크 (비밀번호는 api, 회원가입화면 개발 완료 후 주석 푸시면 됩니다)
    //validateEmail(userEmail);
    //validatePassword(userPassword);


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
    <Login.container>

      <Login.topArea>
        <Login.titleArea>
          <Login.logo
            source={require('./Image/logo.png')}
          />
        </Login.titleArea>
      </Login.topArea>

      <Login.formArea>
        <Login.inputArea>
          <Login.Text>아이디</Login.Text>
          <Login.textFormTop
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
        </Login.inputArea>
        <Login.inputArea>
          <Login.Text>비밀번호</Login.Text>
          <Login.textFormBottom
            placeholder={'입력하세요'}
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            autoCapitalize="none"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            secureTextEntry={true}
          />
        </Login.inputArea>
        <View style={Errortext ? styles.TextValidation : ''}>
          <Login.TextValidationText >{Errortext}</Login.TextValidationText >
        </View>
      </Login.formArea>

      <Login.btnArea>
        <Login.btn
          activeOpacity={0.5}
          onPress={handleSubmitPress}
        >
          <Login.Text style={{ color: 'white' }}>로그인</Login.Text >
        </Login.btn>
      </Login.btnArea>

      <View style={{ height: hp(20) }} />
    </Login.container>
  );
};


const styles = StyleSheet.create({
  TextValidation: {
    // paddingTop: wp(10),
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#ffecec",
    borderColor: "#ff0000",
    justifyContent: "center",
    height: hp(6),
    marginBottom: hp(3)
  },
});
export default LoginScreen;