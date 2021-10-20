import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BarChart, Grid } from 'react-native-svg-charts'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Perference from '../Perference';
import { RefreshControl } from 'react-native-web-refresh-control'
import {Detail} from '../styles/styles'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { dataRequestAction } from '../reducers/user';

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

  const newData = data.map(
    (item, index) => ({
      y: parseInt(item),
      svg: {
        onPressIn: () => {
          setselectItem(index);
          setselectValue(item + 'KWh');
        },
        onPressOut: () => {
          setselectItem(null);
        },
        //날짜데이터 색상변경 
        fill: selectItem === index ? '#000000' : Perference.getDataCountReal()-1 < index ? '#ffb851' : '#385bff',
      }
    })
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || today;
    setShow(Platform.OS === 'ios');
    Perference.setDetailDate(currentDate);
    Perference.setDetailTodayConvert(currentDate);
    setselectedDay(currentDate.format("yyyy년MM월dd일"));

    dispatch(dataRequestAction({userEmail:user,TodayConvert:converttoday,periodType:buttonkor }));
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  const Back = () => {
    today.setDate(today.getDate()-1);
    Perference.setDetailDate(today);
    Perference.setDetailTodayConvert(today);
    setselectedDay(today.format("yyyy년MM월dd일"));  

    dispatch(dataRequestAction({userEmail:user,TodayConvert:Perference.getDetailTodayConvert(),periodType:Perference.getDetailButton() }));
    reloadLines();
  };
  const Next = () => {
    today.setDate(today.getDate()+1);
    Perference.setDetailDate(today);
    Perference.setDetailTodayConvert(today);
    setselectedDay(today.format("yyyy년MM월dd일"));  

    dispatch(dataRequestAction({userEmail:user,TodayConvert:Perference.getDetailTodayConvert(),periodType:Perference.getDetailButton() }));
    reloadLines();
  };

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
        <Detail.topBtn onPress={Back}>
          <Detail.topBtnText> &lt;</Detail.topBtnText>
        </Detail.topBtn>
        <Detail.topBtn onPress={showDatepicker}>
          <Text style={{ color: "#ffffff",fontSize:wp(5),fontWeight:"bold" }}> {selectedDay} </Text>
        </Detail.topBtn>
        <Detail.topBtn onPress={Next}>
          <Detail.topBtnText> &gt;</Detail.topBtnText>
        </Detail.topBtn>
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
        <ScrollView horizontal={true}>
          <View style={{ flex: 1, width:500,height: 200 }}>
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
          </View>
          </ScrollView>
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
          value={todaydate}
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
//}

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
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f5f5f5"
  },
  headContainer: {
    flex: 0.30,
    backgroundColor: "#2e2e33",
    flexWrap:"wrap",
  },
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "#2e2e33",
    position:"relative",
    paddingBottom:hp(4),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
  },
  topDate:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#2e2e33",
    position:"relative",
    marginBottom:'5%'
  },
  middleContainer: {
    flex: 1,
    backgroundColor: "#fff",
    position:"relative",
    marginBottom:'10%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
  },
  tailContainer: {
    flex: 0.4,
    padding: '1%',
    marginBottom:'5%',
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  topBtn: {
   // borderColor: "#000",
   // borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: wp('1%'),
    marginBottom: wp('1%'),

  },
  bottomBoxRow:{
    flexDirection: "row",
    justifyContent: 'space-around',
    padding:wp(5)
  },
  bottomTextBox:{
    borderRadius: 8,
    backgroundColor: "#ffffff",
    alignItems:"center",
    padding:wp(2),
    width:"95%",
    marginLeft:wp(2)

  },
  middleBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:wp(5),
    marginRight:wp(5),
    marginTop:wp(5)
  },
  topRoundBtn:{
    borderRadius: 20,
    backgroundColor: "#222225",
    paddingLeft:wp(6),
    paddingRight:wp(6),
    paddingTop:wp(1),
    paddingBottom:wp(1),
  },
  topRoundBtnText:{
    fontSize:wp(4),
    color:'#ffffff',

  },
  topBtnText: {
    color: '#ffffff',
    fontSize:wp(6),
    paddingLeft:wp(1),
    paddingRight:wp(1)

  },
  Box: {
   

  },
  colorBox: {
    width: 15,
    height: 15,
    backgroundColor: "#000"

  },
  bottomContainer: {
    flex: 0.5,
    paddingLeft: wp(3),
    paddingRight: wp(3),
    marginBottom:hp(3),
  },
  bottomBox: {
    width:'100%',
    flexDirection: "column",
    backgroundColor:"#f5f5f5",
    padding: '3%',
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
    width: 0,
    height: 0
    },
  shadowRadius: 16,
  shadowOpacity: 1,
  borderRadius: 16,

  },
  bottomText: {
    fontSize: wp(4),
    fontWeight:'bold'

  },
  bottomsubText:{
    color: "#909090",
    fontWeight:'bold',
    padding:wp(1)
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%"
  },
  Boxtitle: {
    fontSize: wp(4.5),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold"
  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Boxsubtitle: {
    fontSize: wp(6),
    paddingRight: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),
    fontWeight:"bold"

  },

});
export default DetailScreen;