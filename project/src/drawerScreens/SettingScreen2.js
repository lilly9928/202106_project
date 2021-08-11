
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import React, { useState } from 'react';
  import 'react-native-gesture-handler';
  
  
  import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView
  } from 'react-native';
  
  
  
  function SettingScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
           <ScrollView>
       <View>
       <View style={styles.formArea}><Text  style={styles.Text}>0~1H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
      <View style={styles.formArea}><Text  style={styles.Text}>1~2H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>2~3H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>3~4H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>4~5H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>5~6H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>6~7H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>7~8H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>8~9H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
       <View style={styles.formArea}><Text  style={styles.Text}>9~10H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>10~11H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>11~12H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
       <View style={styles.formArea}><Text  style={styles.Text}>12~13H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>13~14H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>14~15H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>15~16H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>16~17H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>17~18H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>18~19H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>19~20H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>20~21H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>21~22H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>22~23H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
        <View style={styles.formArea}><Text  style={styles.Text}>23~24H </Text>
       <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        /></View>
          </View>
          </ScrollView>
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
        width: '60%',
        height: hp(6)
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
        flex: 5,
      },
  });
  export default SettingScreen;