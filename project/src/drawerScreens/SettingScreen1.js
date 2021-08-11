
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
    TextInput
  } from 'react-native';
  
  
  
  function SettingScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
       <View>
       <View  style={styles.formArea}>
           <Text   style={styles.Text}>금액</Text>
           <TextInput
          style={styles.textFormBottom}
          autoCapitalize="none"
          returnKeyType="next"
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
          secureTextEntry={true} 
        />
       
       </View>
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
        width: '80%',
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