
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


     const onlyNumber = (str,changeindex) => {
      var num =  str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
      var temp_data = [...data];
      var temp_element = { ...temp_data[changeindex]};
      temp_element = num;
      temp_data[changeindex] = temp_element;
      setData(temp_data);
    };

    const handleSubmitPress = () => {
      if(!data){
        alert('저장에 실패했습니다.')
      }
      Perference.setData(data);
      alert('저장되었습니다.');
      //navigation.navigate('이전');
      navigation.reset({index: 0, routes: [{ name: '이전' }],});
    };

    return (
      <SafeAreaView >
           <ScrollView>
           <View style={styles.roundHead}/>
       <View style={styles.container}>
         <Text style={styles.title}>0~6H</Text>
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
          onChangeText={(input) => onlyNumber(input,1)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>2~3H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[2].toString()}
          onChangeText={(input) => onlyNumber(input,2)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>3~4H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[3].toString()}
          onChangeText={(input) => onlyNumber(input,3)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>4~5H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[4].toString()}
          onChangeText={(input) => onlyNumber(input,4)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>5~6H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[5].toString()}
          onChangeText={(input) => onlyNumber(input,5)}
        /></View>
        <Text style={styles.title}>6~12H</Text>
        <View style={styles.formArea}><Text  style={styles.Text}>6~7H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[6].toString()}
          onChangeText={(input) => onlyNumber(input,6)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>7~8H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[7].toString()}
          onChangeText={(input) => onlyNumber(input,7)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>8~9H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[8].toString()}
          onChangeText={(input) => onlyNumber(input,8)}
        /></View>
       <View style={styles.formArea}><Text  style={styles.Text}>9~10H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[9].toString()}
          onChangeText={(input) => onlyNumber(input,9)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>10~11H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false} 
          value={data[10].toString()}
          onChangeText={(input) => onlyNumber(input,10)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>11~12H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[11].toString()}
          onChangeText={(input) => onlyNumber(input,11)}
        /></View>
        <Text style={styles.title}>12~18H</Text>
       <View style={styles.formArea}><Text  style={styles.Text}>12~13H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[12].toString()}
          onChangeText={(input) => onlyNumber(input,12)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>13~14H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[13].toString()}
          onChangeText={(input) => onlyNumber(input,13)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>14~15H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[14].toString()}
          onChangeText={(input) => onlyNumber(input,14)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>15~16H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[15].toString()}
          onChangeText={(input) => onlyNumber(input,15)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>16~17H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[16].toString()}
          onChangeText={(input) => onlyNumber(input,16)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>17~18H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[17].toString()}
          onChangeText={(input) => onlyNumber(input,17)}
        /></View>
         <Text style={styles.title}>18~24H</Text>
        <View style={styles.formArea}><Text  style={styles.Text}>18~19H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[18].toString()}
          onChangeText={(input) => onlyNumber(input,18)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>19~20H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[19].toString()}
          onChangeText={(input) => onlyNumber(input,19)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>20~21H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[20].toString()}
          onChangeText={(input) => onlyNumber(input,20)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>21~22H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[21].toString()}
          onChangeText={(input) => onlyNumber(input,21)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>22~23H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[22].toString()}
          onChangeText={(input) => onlyNumber(input,22)}
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>23~24H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          value={data[23].toString()}
          onChangeText={(input) => onlyNumber(input,23)}
        /></View>

        <Text style={styles.hide} value={data}></Text>
          </View>
          <TouchableOpacity
         style={styles.btn}
            activeOpacity={0.5}
            onPress={handleSubmitPress}
          >
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
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
        fontSize: wp(5),
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(5)
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
        justifyContent:'space-around'
       // flex: 3,
      },
      btn: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#292929',
    
      },
      btnText:{
        paddingBottom: wp(5),
        paddingTop: wp(5),
        paddingRight:wp(2),
        color: 'white',
        fontSize:20
      },
      title:{
        textAlign:"center",
        fontSize:wp(5),
        color:"#909090",
        marginTop:wp(5),
        marginBottom:wp(3),
        paddingTop:wp(2)
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