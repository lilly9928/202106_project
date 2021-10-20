import React , { useState }from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ClipPath, Defs, Rect, Line, } from 'react-native-svg'
import { LineChart, Path } from 'react-native-svg-charts'
import Perference from '../Perference';
import {Report} from '../styles/styles'
import { RefreshControl } from 'react-native-web-refresh-control'

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

  const data = Perference.getReportData();
  const HeadTable= ['일시', '수익', '누적 수익', '살제누적 수익'];
  const DataTable= Perference.getReportDataTable();
  //console.log(DataTable);
  //console.log(data);
  const date = new Date();
  const dataDate = date.getHours()+':'+date.getMinutes()+'기준'
  const indexToClipFrom = date.getMonth();
  const money = Perference.getMoney();
  const actualRevernue=Perference.getReportActualRevenue();
  const [refreshing, setRefreshing] = useState(false);
 // const breakeven =(Perference.getMoney()/(data[1]-data[0]));

//   const breakevenF =()=>{
//     for(var i =0;i>DataTable.length;i++){
//       alert(DataTable.length);
//       if(DataTable[3]>=Perference.getMoney()){
//         alert(i);
//        return i; 
//     }
//   }
// }
Perference.setReportIndexUserInvestment(Perference.getMoney());
const breakeven=Perference.getReportIndexUserInvestment();

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
        stroke={ '#ffb851' }
        strokeWidth={ 4 }
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
      y1={ y(Perference.getMoney()) }
      y2={ y(Perference.getMoney()) }
      stroke={ '#292929' }
     // strokeDasharray={ [ 4, 8 ] }
      strokeWidth={ 3 }
  />
))

const VerticalLine = (({ x,y }) => (
  <Line
      key={ 'zero-axis' }
      x1={x(breakeven)}
      x2={x(breakeven)}
      y1={ '0%' }
      y2={ '100%' }
      stroke={ '#e051ff' }
      strokeWidth={ 3 }
  />
))
React.useEffect(() => {
  reloadLines();

}, [])

const reloadLines = React.useCallback(() => {
  setRefreshing(true)

  wait(2000).then(() => {
    setRefreshing(false)
    
  })
}, [])

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

  return (
    
    <Report.container>
       <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={reloadLines} />
        }
      >
      <Report.topContainerWrap>
      <Report.topContainer>
        <Report.borderBox>
            <Report.Boxtitle>이번달 예상 수익</Report.Boxtitle>
            <Report.middlePriceTextYellow>{Perference.getReportMonthPredicted()+'원'}</Report.middlePriceTextYellow>
            <Report.insideMiddleBoxWrap>
            <Report.insideMiddleBox>
              <Report.bordersubText>월 평균 비교: </Report.bordersubText>
              <Report.borderText>{Perference.getReportMonthAverage()+'원'}</Report.borderText>
            </Report.insideMiddleBox>
            <Report.insideMiddleBox>
            <Report.bordersubText>작년 1월 비교: </Report.bordersubText>
              <Report.borderText>{Perference.getReportLastYearOfMonth()+'원'}</Report.borderText>
            </Report.insideMiddleBox>
            </Report.insideMiddleBoxWrap>
        </Report.borderBox>
        <Report.borderBox>
            <Report.Boxtitle>현재까지 누적 수익</Report.Boxtitle>
            <Report.middlePriceTextBlue>{Perference.getReportTotalRevenue()+'원'}</Report.middlePriceTextBlue>
            <Report.insideMiddleBoxWrap>
            <Report.insideMiddleBox>
              <Report.bordersubText>투자원금: </Report.bordersubText>
              <Report.borderText>{Perference.getMoney()+'원'}</Report.borderText>
            </Report.insideMiddleBox>
            <Report.insideMiddleBox>
            <Report.bordersubText>실제 누적 수익: </Report.bordersubText>
              <Report.borderText>{Perference.getReportActualRevenue()+'원'}</Report.borderText>
            </Report.insideMiddleBox>
            </Report.insideMiddleBoxWrap>
        </Report.borderBox>
      </Report.topContainer>
      <Report.dateText>{dataDate}</Report.dateText>
      </Report.topContainerWrap>
      <Report.middle_topBox>
            <Report.middle_Boxtitle>손익분기점 그래프</Report.middle_Boxtitle>
            <View style={{alignItems:'flex-end'}}>
            <Report.middle_Boxsubtitle>도달 예상<Text style={{color:'#e051ff'}}>3개월 후</Text></Report.middle_Boxsubtitle>
            <Report.middle_BoxsubtitleDate>2021년 9월</Report.middle_BoxsubtitleDate>
            </View>
          </Report.middle_topBox>
      <Report.middleContainer>
        <Report.Box>
          <View style={{ flex: 1 , marginTop:hp(5)}}>
          <LineChart
                style={{ height: 250 }}
                data={ data }
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                    stroke: '#385bff',
                    strokeWidth: 4,
                    clipPath: 'url(#clip-path-1)',
                }}
            >
              <VerticalLine/>
                <HorizontalLine/>
                <Clips/>
                <DashedLine/>
            </LineChart>
          </View>
        </Report.Box>
      </Report.middleContainer>
      <Report.bottomContainer>
        <Report.bottomBox>
          <Report.columnBox>
                <Report.bottomText><Report.colorBox style={{ marginTop: wp(1),borderRadius:100,backgroundColor: "#292929" }} />투자 원금</Report.bottomText>
                <Report.bottomText><Report.colorBox style={ { marginTop: wp(1),borderRadius:100,backgroundColor: "#ffb851" }} />누적 수익(예측)</Report.bottomText>
          </Report.columnBox>
          <Report.columnBox>
              <Report.bottomText><Report.colorBox style={{marginTop: wp(1),borderRadius:100,backgroundColor: "#385bff" }} />누적 수익(실측)</Report.bottomText>
              <Report.bottomText><Report.colorBox style={{marginTop: wp(1),borderRadius:100,backgroundColor: "#e051ff" }} />손익분기점</Report.bottomText>
          </Report.columnBox>
        </Report.bottomBox>
      </Report.bottomContainer>
      <Report.bottomContainer>
      <Table borderStyle={{}}>
          <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableTitleText}/>
          <Rows data={DataTable} textStyle={styles.TableText}/>
        </Table>
      </Report.bottomContainer>
      </ScrollView>

    </Report.container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#f5f5f5"
  },
  Center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadStyle:{
    backgroundColor:'#ebebeb',
    borderRadius:20,
    paddingRight:wp(3),
    paddingTop:wp(3),
    paddingBottom:wp(3),
  },
  TableTitleText:{
    color:'#000000',
    fontSize:wp(4),
    fontWeight:'bold',
    textAlign:'center'
  },
  TableText:{
    color:'#000000',
    fontSize:wp(4),
    alignItems:'center',
    textAlign:'center',
    paddingTop:wp(5)
  },
  middle_BoxsubtitleDate:{
    fontSize:wp(4),
    color:'#909090',
    paddingTop:wp(1)
  },
  dateText:{
    color:'#909090',
    fontSize:wp(4),
    paddingLeft:wp(3.5),
    paddingTop:wp(4),
    paddingBottom:wp(2)
  },
  headContainer: {
    flex: 0.30,
  },
  topContainerWrap:{
    backgroundColor:'#2e2e33',
    paddingBottom:hp(3),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
  },
  topContainer: {
    flex: 0.8,
    padding: '1%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign:'center'
    
  },
  middleContainer: {
    flex: 1,
    padding: '1%',
    backgroundColor:"#f5f5f5",
    marginBottom:'10%'
  },
  bottomContainer: {
    flex: 0.5,
  
  },
  bottomBox:{
    width:'95%',
    marginLeft:wp(2),
    flexDirection: "row",
    backgroundColor:"#ffffff",
    padding: wp(5),
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
    width: 0,
    height: 0
    },
  shadowRadius: 16,
  shadowOpacity: 1,
  borderRadius: 16,
  justifyContent:'space-between',
  marginBottom:hp(5)
  },
  tailContainer: {
    flex: 0.4,
    backgroundColor: "#000",
  },
  borderBox: {
    backgroundColor:'#222225',
    padding:wp(5),
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnBox:{
    flexDirection: "column",
    justifyContent: 'space-between',
    paddingTop:wp(2),
  },
  borderText:{
    color:'#ffffff',
    fontSize:wp(3),
  },
  bordersubText:{
    color:'#909090'
  },
  Boxtitle: {
    fontSize: wp(4),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold",
    color:'#ffffff',

  },
  Boxsubtitle: {
    fontSize: wp(6),
    paddingRight: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),
    color:'#ffffff'

  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  middleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex:1
  },
  insideMiddleBox: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:wp(35)
  },
  insideMiddleBoxWrap:{
    marginTop:wp(7),
  },
  middlePriceTextYellow: {
    fontSize: wp(6),
    fontWeight: "bold",
    paddingLeft: wp('1%'),
    color:'#ffb851'
  },
  middlePriceTextBlue: {
    fontSize: wp(6),
    fontWeight: "bold",
    paddingLeft: wp('1%'),
    color:'#385bff'
  },
  middleConText: {
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),
    color:'#ffffff'
  },
  bottomContainer: {
    flex: 0.5,
    padding: '1%'
  },
  bottomText: {
    fontSize: wp(4),
    fontWeight:'bold',
    marginBottom:wp(2)
    
  },
  colorBox: {
    width: 15,
    height: 15,
    //marginRight:wp(5)

  },
  middle_topBox:{
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding:wp(5)
    
  },
  middle_Boxtitle:{
    color:'black',
    fontSize:wp(4)
  },
  middle_Boxsubtitle:{
    color:'#000000',
    fontWeight:'bold',
    fontSize:wp(6)
  },
});
export default ReportScreen;