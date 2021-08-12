
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
  SafeAreaView
} from 'react-native';

import { BarChart, Grid } from 'react-native-svg-charts'


function HomeScreen({ navigation }) {

  const [selectItem, setselectItem] = useState(null);
  const [selectValue, setselectValue] = useState(null);

  const data = [1000, 3000, 4000, 9500, 8500, 2000, 7000, 1000, 2000, 4000, 1000, 3000, 4000, 9500, 8500, 2000, 7000, 1000, 2000, 4000, 7000, 1000, 2000, 4000];
  const date = new Date();
  const dataDate = date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate()+'.'+date.getHours()+':'+date.getMinutes()+'기준'
  const newData = data.map(
    (item, index) => ({
      y: item,
      svg: {
        onPressIn: () => {
          setselectItem(index),
          setselectValue(item + '원')
        },
        onPressOut: () => {
          setselectItem(null)
        },
        fill: selectItem === index ? '#BE81F7' : date.getHours() < index ? '#FFBF00' : '#00BFFF',
      }
    })
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>오늘의 수익</Text>
            <Text style={styles.Boxsubtitle}>{dataDate}</Text>
          </View>
          <View style={styles.middleBox}>
            <Text style={styles.middleText}>120000원</Text>
          </View>
          <View style={styles.bottomBox}>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>현재까지 수익</Text>
              <Text style={styles.bottomText}>120000원</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>남은 시간 예측 수익</Text>
              <Text style={styles.bottomText}>20000원</Text>
            </View>

          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>시간대별 수익 그래프</Text>
            <Text style={styles.Boxsubtitle}>{selectValue}</Text>
          </View>
          <View style={{ flex: 1, height: 150 }}>
            <BarChart
              style={{ flex: 1, marginTop: 30 }}
              data={newData}
              // svg={{fill: this.state.color,}}
              yAccessor={({ item }) => item.y}
              contentInset={{ top: 10, bottom: 10 }}
              spacingInner={0.35}
              spacingOuter={0.3}
              gridMin={1}
            >
              {/*<Grid direction={Grid.Direction.VERTICAL}/>*/}
            </BarChart>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer} >
        <View style={styles.Box}>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#00BFFF' }]} />실제 수익: 실제 측정된 발전 수익 데이터입니다.</Text>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#FFBF00' }]} />예측 수익: 현재 시간 이후의 예측 발전 수익 데이터입니다.</Text>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#BE81F7' }]} />클릭한 그래프: 그래프를 클릭하시면 우측 상단에서 수익 값을 확인하실 수 있습니다.</Text>
        </View>
      </View>
      <View style={styles.tailContainer}>

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
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.8,
    backgroundColor:"#fff",
    padding: '1%',
  },
  middleContainer: {
    flex: 1,
    backgroundColor:"#fff",
    padding: '1%'
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor:"#fff",
    padding: '1%'
  },
  tailContainer: {
    flex: 0.4,
  },
  Box: {
    borderColor: "#000",
    //width:"100%",
    height: "100%",
    borderWidth: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleText: {
    fontSize: wp('6%'),
    paddingLeft: wp(1),
    paddingBottom: wp(5),
    paddingTop: wp(1),
    fontWeight: "bold"
  },
  bottomBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: wp('3%'),
    paddingLeft: wp(2),
    paddingTop: wp(1),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%"
  },
  colorBox: {
    width: 10,
    height: 10,
    backgroundColor: "#000"

  }
});
export default HomeScreen;