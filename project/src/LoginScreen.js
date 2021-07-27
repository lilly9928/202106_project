
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
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';

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
          Perference.set(userEmail);
          navigation.navigate('MainTab');
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
          <Text style={(styles.Text, { color: 'black' })}>Logo</Text>
        </View>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.Text}>아이디(이메일)</Text>
        <TextInput
          style={styles.textFormTop}
          placeholder={'이메일을 입력해주세요.'}
          onChangeText={(userEmail) => setUserEmail(userEmail)}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
        <Text style={styles.TextValidation}>{emailErrortext}</Text>
        <Text style={styles.Text}>비밀번호</Text>
        <TextInput
          style={styles.textFormBottom}
          placeholder={'비밀번호를 입력해주세요.'}
          onChangeText={(userPassword) => setUserPassword(userPassword)}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        />
        <Text style={styles.TextValidation}>{passwordErrortext}</Text>
      </View>
      <View style={{ flex: 0.68 }}>
        {/* <View style={styles.btnArea}> */}
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={(styles.Text, { color: 'white' })}>로그인</Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
      <View style={{ flex: 3 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: wp(7),
    paddingRight: wp(7),

  },
  topArea: {
    flex: 1,
    paddingTop: wp(20),
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
  },
  TextValidation: {
    fontSize: wp('4%'),
    color: 'red',
    paddingTop: wp(2),
  },

  formArea: {
    justifyContent: 'center',
    paddingTop: wp(20),
    flex: 5,
  },
  textFormTop: {
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  textFormBottom: {
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
    height: hp(6),
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnArea: {
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    marginTop: hp(10),
  },
  btn: {
    flex: 1,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',

  },
});
export default LoginScreen;