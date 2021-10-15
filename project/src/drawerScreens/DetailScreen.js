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
import { set } from 'lodash';
import { parse } from 'react-native-svg';

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
  const DataTable=Perference.getDataTable();
  // const date = new Date();
  const [selectItem, setselectItem] = useState(null);
  const [selectValue, setselectValue] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(Perference.getToday());
  const [buttonName, setButtonName] = useState(0);
  const [selectedDay, setselectedDay] = useState(date.format('yyyy년MM월dd일'));
  const today = new Date();

  const [refreshing, setRefreshing] = useState(false);


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
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setselectedDay(currentDate.format("yyyy년MM월dd일"));
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  
  const Back = () => {
    var temp = new Date(date.getFullYear(),date.getMonth(),date.getDate());
    switch(buttonName)
    {
      case 0:
        temp.setDate(temp.getDate()-1);
        break;
      case 1:
        temp.setDate(temp.getDate()-7);
        break;
      case 2:
        var datetemp = temp.getDate();
        temp.setMonth(temp.getMonth()-1);
        if(datetemp!=temp.getDate())
        {
          console.log("error!");
          temp = new Date(temp.getFullYear(),temp.getMonth(),-1);
          temp.setDate(temp.getDate()+1);
        }
        break;
      case 3:
        temp.setFullYear(temp.getFullYear()-1);
        break;
    }
    setDate(temp)
    setselectedDay(temp.format("yyyy년MM월dd일"));
    
  };
  const Next = () => {
    var temp = new Date(date.getFullYear(),date.getMonth(),date.getDate());
    switch(buttonName)
    {
      case 0:
        temp.setDate(temp.getDate()+1);
        break;
      case 1:
        temp.setDate(temp.getDate()+7);
        break;
      case 2:
        var datetemp = temp.getDate();
        temp.setMonth(temp.getMonth()+1);
        if(datetemp!=temp.getDate())
        {
          console.log("error!");
          temp = new Date(temp.getFullYear(),temp.getMonth(),-1);
          temp.setDate(temp.getDate()+1);
        }
        break;
      case 3:
        temp.setFullYear(temp.getFullYear()+1);
        break;
    }
    setDate(temp)
    setselectedDay(temp.format("yyyy년MM월dd일"));
  };

  const query = (params) => {
    return Object.keys(params) .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) .join('&');
  }

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
    setButtonName(num);
    let params = { "plantId_subId": Perference.getUser(), "timestamp": Perference.getConvertToday(),"periodType":btn };
    let url = 'http://118.131.6.218:8000/detail?'+query(params);
    fetch(url)
      .then(res => res.json())
      .then(res => {
      Perference.setData(res.realPowerGraph.Y.concat(res.predictedPowerGraph.Y))
      Perference.setDataTable(res.revenueFromPowerList)
      Perference.setDataCountReal(res.realPowerGraph.Y)
      });
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
    <SafeAreaView style={styles.container}>
         <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={reloadLines} />
          }
          >
      <View  style={styles.topContainer}>
        <View style={styles.topDate}>
        <TouchableOpacity style={styles.topBtn} onPress={Back}>
          <Text style={(styles.topBtnText)}> &lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn} onPress={showDatepicker}>
          <Text style={[{ color: "#fff",fontSize:wp(5),fontWeight:"bold" }]}> {selectedDay} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBtn}  onPress={Next}>
          <Text style={(styles.topBtnText)}> &gt;</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.topBox}>
            <TouchableOpacity style={styles.topRoundBtn}  onPress={()=>BtnClick(0)}>
              <Text style={(styles.topRoundBtnText)}> 일 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topRoundBtn} onPress={()=>BtnClick(1)}>
              <Text style={(styles.topRoundBtnText)}> 주 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topRoundBtn} onPress={()=>BtnClick(2)}>
              <Text style={(styles.topRoundBtnText)}> 월 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topRoundBtn} onPress={()=>BtnClick(3)}>
              <Text style={(styles.topRoundBtnText)}> 년 </Text>
            </TouchableOpacity>
          </View>
      </View>


      <View style={styles.middleContainer}>
      <View style={styles.middleBox}>
            <Text style={styles.Boxtitle}>발전량 그래프</Text>
            <Text style={styles.Boxsubtitle}>{selectValue}</Text>
          </View>
        <View style={styles.Box}>
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
        </View>
        <View style={styles.bottomContainer} >
        <View style={styles.bottomBox}>
          <View style={styles.bottomBoxRow}>
          <View style={[styles.colorBox, { marginTop: wp(1),borderRadius:100,backgroundColor: "#385bff" }]} />
            <View>
              <Text style={styles.bottomText}>실제 발전량</Text>
              <Text style={styles.bottomsubText}>실제 측정된</Text>
              <Text style={styles.bottomsubText}>발전량 데이터</Text>
            </View>
            <View style={[styles.colorBox, { marginTop: wp(1),borderRadius:100,backgroundColor: '#FFBF00' }]} />
            <View>
              <Text style={styles.bottomText}>예측 발전량</Text>
              <Text style={styles.bottomsubText}>현재 시간 이후의</Text>
              <Text style={styles.bottomsubText}>예측 발전량 데이터</Text>
            </View>
          </View>

          <View style={styles.bottomTextBox}>
              <Text style={styles.bottomsubText}>그래프 클릭 시 구간 별 발전량을 확인할 수 있습니다.</Text>
          </View>
        </View>
      </View>
      </View>


      <View style={styles.tailContainer} >
        <Table borderStyle={{borderWidth: 0}}>
          <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableTitleText}/>
          <Rows data={DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </ScrollView>
    </SafeAreaView>

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