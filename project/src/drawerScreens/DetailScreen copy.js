import React, { useState } from 'react';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid,XAxis,YAxis } from 'react-native-svg-charts'
import { Table, Row, Rows } from 'react-native-table-component';
import Perference from '../Perference';
import { RefreshControl } from 'react-native-web-refresh-control'
import {Detail} from '../styles/styles'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { dataRequestAction } from '../reducers/user';
import * as scale from 'd3-scale'

//날짜 포멧 설정 
Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy": return d.getFullYear();
      case "yy": return (d.getFullYear() % 1000).zf(2);
      case "MM": return (d.getMonth() + 1).zf(2);
      case "dd": return d.getDate().zf(2);
      case "E": return weekName[d.getDay()];
      case "HH": return d.getHours().zf(2);
      case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case "mm": return d.getMinutes().zf(2);
      case "ss": return d.getSeconds().zf(2);
      case "a/p": return d.getHours() < 12 ? "오전" : "오후";
      default: return $1;
    }
  });
};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };


function DetailScreen({ navigation }) {
  const data = Perference.getData();
  const Xdata = Perference.getDetailXData();
  const HeadTable= ['시간', '발전량', '수익', '누적수익'];
  const today = Perference.getToday();
  const converttoday = Perference.getConvertToday();
  const DataTable=Perference.getDataTable();
  const [selectItem, setselectItem] = useState(null);
  const [selectValue, setselectValue] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedDay, setselectedDay] = useState(today.format("yyyy년MM월dd일"));
  const user = Perference.getUser();
  const buttonkor =Perference.getDetailButton();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const day=['00시','01시','02시','03시','04시','05시','06시','07시','08시','09시','10시','11시','12시','13시','14시','15시','16시','17시','18시','19시','20시','21시','22시','23시'];
  const week=['월','화','수','목','금','토','일'];

  //그래프 데이터 디자인 
  const newData = data.map(
    (item, index) => ({
      y: parseInt(item),
      svg: {
        onPressIn: () => {
          setselectItem(index);
          setselectValue(item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'KWh');
        },
        onPressOut: () => {
          setselectItem(index);
          setselectValue(item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'KWh');
        },
        //날짜데이터 색상변경 
        fill: selectItem === index ? '#000000' : Perference.getDataCountReal()-1 < index ? '#ffb851' : '#385bff',
      }
    })
  );

  //달력 클릭 이벤트
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || today;
    setShow(Platform.OS === 'ios');
    Perference.setDetailDate(currentDate);
    Perference.setDetailTodayConvert(currentDate);
    setselectedDay(currentDate.format("yyyy년MM월dd일"));

    dispatch(dataRequestAction({userEmail:user,TodayConvert:converttoday,periodType:buttonkor }));
  };

//달력 클릭 이벤트
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  //이전 날짜 클릭 이벤트 
  const Back = () => {
    today.setDate(today.getDate()-1);
    Perference.setDetailDate(today);
    Perference.setDetailTodayConvert(today);
    setselectedDay(today.format("yyyy년MM월dd일"));  

    dispatch(dataRequestAction({userEmail:user,TodayConvert:Perference.getDetailTodayConvert(),periodType:Perference.getDetailButton() }));
    reloadLines();
  };
  //이후 날짜 클릭 이벤트
  const Next = () => {
    today.setDate(today.getDate()+1);
    Perference.setDetailDate(today);
    Perference.setDetailTodayConvert(today);
    setselectedDay(today.format("yyyy년MM월dd일"));  

    dispatch(dataRequestAction({userEmail:user,TodayConvert:Perference.getDetailTodayConvert(),periodType:Perference.getDetailButton() }));
    reloadLines();
  };
//일 주 월 년 버튼 클릭 이벤트
  const BtnClick = (num) =>{
    let btn; 
    switch(num){
      case 0:
        btn = 'day';
      break;
      case 1:
        btn = 'week';
      break;
      case 2:
        btn = 'month';
      break;
      case 3:
        btn = 'year';
      break;
        
    }
    Perference.setDetailButton(btn);

    dispatch(dataRequestAction({userEmail:user,TodayConvert:Perference.getDetailTodayConvert(),periodType:Perference.getDetailButton()}));
    reloadLines();
  }

  //새로고침
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
    <Detail.container>
         <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={reloadLines} />
          }
          >
      <Detail.topContainer>
        <Detail.topDate>
        {/* <Detail.topBtn onPress={Back}>
          <Detail.topBtnText> &lt;</Detail.topBtnText>
        </Detail.topBtn> */}
        {/* <Detail.topBtn onPress={showDatepicker}> */}
        <Detail.topBtn>
          <Text style={{ color: "#ffffff",fontSize:wp(5),fontWeight:"bold" }}> {selectedDay} </Text>
        </Detail.topBtn>
        {/* <Detail.topBtn onPress={Next}>
          <Detail.topBtnText> &gt;</Detail.topBtnText>
        </Detail.topBtn> */}
      </Detail.topDate>
        <Detail.topBox>
            <Detail.topRoundBtn onPress={()=>BtnClick(0)}>
              <Detail.topRoundBtnText> 일 </Detail.topRoundBtnText>
            </Detail.topRoundBtn>
            <Detail.topRoundBtn onPress={()=>BtnClick(1)}>
              <Detail.topRoundBtnText> 주 </Detail.topRoundBtnText>
            </Detail.topRoundBtn>
            <Detail.topRoundBtn onPress={()=>BtnClick(2)}>
              <Detail.topRoundBtnText> 월 </Detail.topRoundBtnText>
            </Detail.topRoundBtn>
            <Detail.topRoundBtn onPress={()=>BtnClick(3)}>
              <Detail.topRoundBtnText> 년 </Detail.topRoundBtnText>
            </Detail.topRoundBtn>
          </Detail.topBox>
      </Detail.topContainer>


      <Detail.middleContainer>
      <Detail.middleBox>
            <Detail.Boxtitle>발전량 그래프</Detail.Boxtitle>
            <Detail.Boxsubtitle>{selectValue}</Detail.Boxsubtitle>
          </Detail.middleBox>
        <Detail.Box>
        <View style = {{height: 200, flexDirection: 'row'}}>
        <YAxis
          data = {data}
          style = {{marginTop: 30}}
          contentInset = {{ top: 10, bottom: 30 }}
          svg = {{fontSize: 13, fill: '#909090' }}
          />
        <ScrollView horizontal={true}>
          <View style={{ flex: 1, width:2000,height: 200 }}>
            <BarChart
              style={{ flex: 1, marginTop: 30 }}
              data={newData}
              yAccessor={({ item }) => item.y}
              contentInset={{ top: 10, bottom: 10 }}
              spacingInner={0.05}
              spacingOuter={0.3}
              gridMin={1}
            >
              <Grid direction={Grid.Direction.HORIZONTAL}/>
            </BarChart>
            <XAxis
                    style={{}}
                    data={ newData }
                    scale={scale.scaleBand}
                    formatLabel={(value, index) => Xdata[index]}
                    labelStyle={ { fontSize:30 , color:'black'} }
                />
          </View>
          </ScrollView>
          </View>
        </Detail.Box>
        <Detail.bottomContainer>
        <Detail.bottomBox>
          <Detail.bottomBoxRow>
          <Detail.colorBox style={{ marginTop: wp(1),borderRadius:100,backgroundColor: "#385bff" }} />
            <View>
              <Detail.bottomText>실제 발전량</Detail.bottomText>
              <Detail.bottomsubText>실제 측정된</Detail.bottomsubText>
              <Detail.bottomsubText>발전량 데이터</Detail.bottomsubText>
            </View>
            <Detail.colorBox style={ { marginTop: wp(1),borderRadius:100,backgroundColor: '#FFBF00' }} />
            <View>
              <Detail.bottomText>예측 발전량</Detail.bottomText>
              <Detail.bottomsubText>현재 시간 이후의</Detail.bottomsubText>
              <Detail.bottomsubText>예측 발전량 데이터</Detail.bottomsubText>
            </View>
          </Detail.bottomBoxRow>

          <Detail.bottomTextBox>
              <Detail.bottomsubText>그래프 클릭 시 구간 별 발전량을 확인할 수 있습니다.</Detail.bottomsubText>
          </Detail.bottomTextBox>
        </Detail.bottomBox>
      </Detail.bottomContainer>
      </Detail.middleContainer>


      <Detail.tailContainer>
        <Table borderStyle={{borderWidth: 0}}>
          <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableTitleText}/>
          <Rows data={DataTable} textStyle={styles.TableText}/>
        </Table>
      </Detail.tailContainer>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={today}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </ScrollView>
    </Detail.container>

  );
}
//표 스타일시트
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
    fontSize:wp(5),
    fontWeight:'bold',
    textAlign:'center'
  },
  TableText:{
    color:'#000000',
    fontSize:wp(5),
    alignItems:'center',
    textAlign:'center',
    paddingTop:wp(5)
  },
});
export default DetailScreen;