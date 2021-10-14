
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
      navigation.reset({index: 0, routes: [{ name: '이전' }],});
    };
    return (
      <SafeAreaView tyle={styles.containerWrap}>
           <View style={styles.roundHead}/>
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
        <Text style={styles.TextGray}>원</Text>
       </View>
      </View>
      <TouchableOpacity
         style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    //  flex: 1,
      flexDirection: "column",
      backgroundColor:"#f5f5f5",
      paddingLeft:wp(5),
      paddingRight:wp(5),
    },
    textFormBottom: {
      width: '70%',
      height: hp(6),
      textAlign:"right",
      fontSize:wp(5),
      marginTop:wp(4),
      },
      Text: {
        fontSize: wp('5%'),
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(5)
      },
      TextGray:{
        fontSize: wp('5%'),
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(5),
        color:'#909090'
      },
      formArea: {
        flexDirection: 'row',
        paddingTop: wp(2),
        paddingBottom:wp(2),
        backgroundColor:"#ffffff",
        borderRadius:20,
        marginTop:wp(4),
        paddingLeft:wp(4),
        paddingRight:wp(4),
        justifyContent:'space-around',
        height:hp(13)
       // flex: 3,
      },
      btn: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#292929',
        marginTop:hp(62)
    
      },
      btnText:{
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(2),
        color: 'white',
        fontSize:20
      },
       roundHead:{
        backgroundColor:"#2e2e33",
        width:'100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        height:wp(3)
      }
  });
  export default SettingScreen;