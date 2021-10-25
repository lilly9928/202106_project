import React , { useState }from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import { Table, Row, Rows} from 'react-native-table-component';
import { ClipPath, Defs, Rect, Line, } from 'react-native-svg'
import { LineChart, Path } from 'react-native-svg-charts'
import Perference from '../Perference';
import {Report} from '../styles/styles'
import { RefreshControl } from 'react-native-web-refresh-control'

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

function ReportScreen({ navigation }) {

  const data = Perference.getReportData();
  const HeadTable= ['일시', '수익', '누적 수익', '살제누적 수익'];
  const DataTable= Perference.getReportDataTable();
  const date = new Date();
  const dataDate = date.getHours()+':'+date.getMinutes()+'기준'
  const indexToClipFrom = date.getMonth();
  const [refreshing, setRefreshing] = useState(false);

  Perference.setReportIndexUserInvestment(Perference.getMoney());
  const breakeven=Perference.getReportIndexUserInvestment();

  //그래프 디자인 
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
  //줄 
  const DashedLine = ({ line }) => (
    <Path
        key={ 'line-1' }
        d={ line }
        stroke={ '#ffb851' }
        strokeWidth={ 4 }
        fill={ 'none' }
        clipPath={ 'url(#clip-path-2)' }
    />
)

//세로줄 투자원금 
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

//가로줄 손익분기점
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

//새로고침
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
              <Report.borderText>{Perference.getMoney().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원'}</Report.borderText>
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

//표 디자인 
const styles = StyleSheet.create({
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
  });
export default ReportScreen;