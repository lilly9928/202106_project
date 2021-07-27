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
  SafeAreaView,
  ScrollView,
} from 'react-native';

function ReportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>이번달 예상 수익</Text>
            <Text style={styles.Boxsubtitle}>날짜</Text>
          </View>
          <View style={styles.middleBox}>
            <Text style={styles.middlePriceText}>111111원</Text>
            <View style={styles.insideMiddleBox}>
              <Text style={styles.middleText}>월 평균 비교: </Text>
              <Text style={styles.middleText}>작년 1월 비교: </Text>
            </View>
            <View style={styles.insideMiddleBox}>
              <Text style={styles.middleText}>금액금액금액</Text>
              <Text style={styles.middleText}>금액금액금액</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>현재까지 누적 수익</Text>
            <Text style={styles.Boxsubtitle}>날짜</Text>
          </View>
          <View style={styles.middleBox}>
            <Text style={styles.middlePriceText}>111111원</Text>
            <View style={styles.insideMiddleBox}>
              <Text style={styles.middleText}>투자원금: </Text>
              <Text style={styles.middleText}>실제 누적 수익:</Text>
              <Text style={styles.middleText}>(투자 수익 - 원금)</Text>
            </View>
            <View style={styles.insideMiddleBox}>
              <Text style={styles.middleText}> 금액금액금액</Text>
              <Text style={styles.middleText}> 금액금액금액</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.Center}>
          <Text style={styles.middleConText}>현재~~~</Text>
        </View>
        <View style={styles.Box}>
          </View>
      </View>
      <View style={styles.bottomContainer}>
      <View style={styles.Box}>
        
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.8,
    //backgroundColor: "#CCC",
    padding: '1%'
  },
  middleContainer: {
    flex: 1,
    padding: '1%'
    // backgroundColor: "#000",
  },
  bottomContainer: {
    flex: 0.4,
    //backgroundColor: "#000",
    padding: '1%'
  },
  tailContainer: {
    flex: 0.4,
    backgroundColor: "#000",
  },
  Box: {
    borderColor: "#000",
    //width:"100%",
    height: "100%",
    borderWidth: 2,
    margin: 'auto'

  },
  Boxtitle: {
    fontSize: wp('5%'),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold"
  },
  Boxsubtitle: {
    fontSize: wp('3%'),
    paddingRight: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),

  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  middleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  insideMiddleBox: {
    flexDirection: 'column',
  },
  middlePriceText: {
    fontSize: wp('5%'),
    fontWeight: "bold",
    paddingLeft: wp('1%'),
  },
  middleConText: {

  }
});
export default ReportScreen;