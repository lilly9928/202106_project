import React , { useState }from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ClipPath, Defs, Rect, Line, } from 'react-native-svg'
import { LineChart, Path } from 'react-native-svg-charts'

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

  const data = [1000, 2000, 3000, 4000, 5000, 4000, 2000, 8000, 9000, 10000, 11000, 12000];
  const HeadTable= ['일시', '수익', '누적 수익', '살제 누적 수익'];
  const DataTable= [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '4']
  ];
  const date = new Date();
  const dataDate = date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate()+'.'+date.getHours()+':'+date.getMinutes()+'기준'
  const indexToClipFrom = date.getMonth();

  const Clips = ({ x, width }) => (
      <Defs key={ 'clips' }>
          <ClipPath id="clip-path-1">
              <Rect x={ '0' } y={ '0' } width={ x(indexToClipFrom) } height={ '100%' }/>
          </ClipPath>
          <ClipPath id={ 'clip-path-2' }>
              <Rect x={ x(indexToClipFrom) } y={ '0' } width={ width - x(indexToClipFrom) } height={ '100%' }/>
          </ClipPath>
      </Defs>
  )
  const DashedLine = ({ line }) => (
    <Path
        key={ 'line-1' }
        d={ line }
        stroke={ '#FFBF00' }
        strokeWidth={ 2 }
        fill={ 'none' }
        //strokeDasharray={ [ 4, 4 ] }
        clipPath={ 'url(#clip-path-2)' }
    />
)
const HorizontalLine = (({ y }) => (
  <Line
      key={ 'zero-axis' }
      x1={ '0%' }
      x2={ '100%' }
      y1={ y(10000) }
      y2={ y(10000) }
      stroke={ 'gray' }
     // strokeDasharray={ [ 4, 8 ] }
      strokeWidth={ 2 }
  />
))

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>이번달 예상 수익</Text>
            <Text style={styles.Boxsubtitle}>{dataDate}</Text>
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
            <Text style={styles.Boxsubtitle}>{dataDate}</Text>
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
          <Text style={styles.middleConText}>개월 후(*년 *월) 손익 분기점에 도달할 것으로 예상됩니다</Text>
        </View>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>손익분기점 그래프</Text>
          </View>
          <View style={{ flex: 1 }}>
          <LineChart
                style={{ height: 200 }}
                data={ data }
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                    stroke: '#00BFFF',
                    strokeWidth: 2,
                    clipPath: 'url(#clip-path-1)',
                }}
            >
                <HorizontalLine/>
                <Clips/>
                <DashedLine/>
            </LineChart>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer} >
        <View style={styles.HorizontalBox}>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: 'gray' }]} />투자 원금</Text>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#00BFFF' }]} />누적 수익(실축)</Text>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#FFBF00' }]} />누적 수익(예측)</Text>
          <Text style={styles.bottomText}><View style={[styles.colorBox, { backgroundColor: '#BE81F7' }]} />손익분기점</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
      <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
          <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
     backgroundColor: "#fff",
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
    backgroundColor: "#fff",
    padding: '1%'
  },
  middleContainer: {
    flex: 1,
    padding: '1%',
    backgroundColor: "#fff",
    marginBottom:'10%'
  },
  bottomContainer: {
    flex: 0.4,
    backgroundColor: "#fff",
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
    borderWidth: 1,
    margin: 'auto'

  },
  HorizontalBox:{
    borderColor: "#000",
    height: "100%",
    borderWidth: 1,
    margin: 'auto',
    flexDirection: 'row',
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
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),
  },
  bottomContainer: {
    flex: 0.5,
    padding: '1%'
  },
  bottomText: {
    fontSize: wp('3%'),
    paddingLeft: wp(2),
    paddingTop: wp(1),
  },
  colorBox: {
    width: 10,
    height: 10,

  },
});
export default ReportScreen;