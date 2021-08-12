
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
    ScrollView,
    TouchableOpacity
  } from 'react-native';
  
  
  
  function SettingScreen({ navigation }) {

     const [data, setData] = useState(Perference.getData());
   // const data = Perference.getData();
    const [Errortext, setErrortext] = useState('오류');

     const onlyNumber = (str,changeindex) => {
      var num =  str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
      setData((data) =>
      data.map((item,index) => {
        if (index === changeindex) {
          return { ...item, str};
        }
        //return item[index];
      })
    );

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
           <ScrollView>
       <View style={styles.container}>
       <View style={styles.formArea}><Text  style={styles.Text}>0~1H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[0].toString()}
          onChangeText={(input) => onlyNumber(input,0)}
          /></View>
      <View style={styles.formArea}><Text  style={styles.Text}>1~2H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[1].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>2~3H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[2].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>3~4H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[3].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>4~5H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[4].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>5~6H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[5].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>6~7H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[6].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>7~8H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[7].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>8~9H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[8].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
       <View style={styles.formArea}><Text  style={styles.Text}>9~10H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[9].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>10~11H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false} 
          value={data[10].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>11~12H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[11].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
       <View style={styles.formArea}><Text  style={styles.Text}>12~13H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[12].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>13~14H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[13].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>14~15H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[14].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>15~16H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[15].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>16~17H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[16].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>17~18H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[17].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>18~19H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[18].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>19~20H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[19].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>20~21H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[20].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>21~22H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[21].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>22~23H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[22].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>23~24H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[23].toString()}
          onChangeText={(input) => onlyNumber(input)}
        /></View>

        <Text style={styles.hide} value={data}></Text>
        <TouchableOpacity
         style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    hide:{
      opacity:0
    },
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor:"#fff"
    },
    textFormBottom: {
        borderWidth: 2,
        borderColor: 'black',
        width: '70%',
        height: hp(6),
        marginRight:wp(2),
      },
      Text: {
        fontSize: wp('5%'),
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(5)
      },
      formArea: {
        flexDirection: 'row',
        paddingTop: wp(2),
        paddingBottom:wp(2),
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