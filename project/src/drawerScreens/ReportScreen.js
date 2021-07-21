import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function ReportScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.titleArea}>
      <Text style={(styles.Text, {color: 'black'})}>ReportScreen</Text>
        </View>
      </View>
     </View>
  );
}

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
    paddingBottom: wp(2),
    paddingTop: wp(2),
  },
  TextValidation: {
    fontSize: wp('4%'),
    color: 'red',
    paddingTop: wp(2),
  },

  formArea: {
    justifyContent: 'center',
    paddingTop: wp(20),
    flex: 1.5,
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
export default ReportScreen;