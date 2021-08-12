
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
    TextInput,
    TouchableOpacity,
    Input
  } from 'react-native';
  
  
  
  function SettingScreen({ navigation }) {

    const [price, setPrice] = useState(Perference.getMoney());
    const [Errortext, setErrortext] = useState('오류');

     const onlyNumber = (str) => {
      var num =  str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
      setPrice(num);

    };

    const handleSubmitPress = () => {
      if(!price){
        alert('저장에 실패했습니다.')
      }
      Perference.setMoney(price);
      alert('저장되었습니다.');
      navigation.navigate('이전');
    };
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.container}>
       <View  style={styles.formArea}>
           <Text   style={styles.Text}>금액</Text>
           <TextInput
           type="number"
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={price.toString()}
          onChangeText={(input) => onlyNumber(input)}
        />
        <Text style={styles.Text}>원</Text>
       </View>
       <TouchableOpacity
         style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor:"#fff"
    },
    textFormBottom: {
        borderWidth: 2,
        borderColor: 'black',
        width: '75%',
        height: hp(6),
        marginRight:wp(2),
        textAlign : 'right'
      },
      Text: {
        fontSize: wp('5%'),
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(5)
      },
      formArea: {
        flexDirection: 'row',
        paddingTop: wp(10),
        paddingBottom:wp(5),
       // flex: 3,
      },
      btn: {
        //flex: 1,
        width: '80%',
        marginLeft:'10%',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    
      },
      btnText:{
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(2),
        paddingBottom:wp(5),
        color: 'white',
        fontSize:20
      }
  });
  export default SettingScreen;