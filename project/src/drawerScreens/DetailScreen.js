import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import {BarChart, Grid} from 'react-native-svg-charts'

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Button
} from 'react-native';
//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
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

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};


function DetailScreen({navigation}) {

 // class DetailScreen extends React.PureComponent {
    // state = {
    //   selectItem: null,
    //   selectValue:null,
    // };
 
   // render() {
      const data = [1000, 3000, 4000, 9500, 8500, 2000, 7000,1000,2000,4000,1000, 3000, 4000, 9500, 8500, 2000, 7000,1000,2000,4000,7000,1000,2000,4000];
     // const date = new Date();
     const [selectItem, setselectItem] = useState(null);
     const [selectValue, setselectValue] = useState(null);
     const [mode, setMode] = useState('date');
     const [show, setShow] = useState(false);
     const [date, setDate] = useState(new Date());
     const [selectedDate, setselectedDate] = useState(new Date().format("yyyy/MM/dd"));
  const newData = data.map(
    (item, index) => ({
      y: item,
      svg: {
        onPressIn: () => {
        //  setdataLabel(index);
        setselectItem(index);
        setselectValue(item+'원');
          // this.setState({
          //   selectItem: index,
          //   selectValue:item+'원'
          // })
        },
        onPressOut: () => {
          setselectItem(null);
          // this.setState({
          //   selectItem: null,
          // })
        },
        // fill: this.state.selectItem === index ? '#BE81F7' :selectedDate.getHours() < index ? '#FFBF00' : '#00BFFF',
        fill: selectItem === index ? '#BE81F7' :date.getHours() < index ? '#FFBF00' : '#00BFFF',
      }
    })
  );
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [selectedDate, setselectedDate] = useState(date.format("yyyy/MM/dd"));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setselectedDate(currentDate.format("yyyy/MM/dd"));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.headContainer}></View>
    <View style={styles.topContainer}>
    <TouchableOpacity style={styles.topBtn}>
    <Text style={(styles.topBtnText)}> 전 </Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={showDatepicker}>
            <Text style={[{ color: "#000" }]}> {selectedDate} </Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}>
    <Text style={(styles.topBtnText)}> 후 </Text>
          </TouchableOpacity>
      </View> 
      <View style={styles.middleContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <Text style={styles.Boxtitle}>발전량 그래프</Text>
            <Text style={styles.Boxsubtitle}>{selectValue}</Text>
          </View>
          <View style={{flex: 1, height: 150}}>
        <BarChart
          style={{flex: 1, marginTop: 30}}
          data={newData}
          // svg={{fill: this.state.color,}}
          yAccessor={({item}) => item.y}
          contentInset={{top: 10, bottom: 10}}
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
       <Text style={styles.bottomText}><View style={[styles.colorBox,{backgroundColor: '#FFBF00'}]}/>실제 발전량: 실제 측정된 발전 발전량 데이터입니다.</Text>
        <Text style={styles.bottomText}><View style={[styles.colorBox,{backgroundColor: '#00BFFF'}]}/>예측 발전량: 현재 시간 이후의 예측 발전량 데이터입니다.</Text>
        <Text style={styles.bottomText}><View style={[styles.colorBox,{backgroundColor: '#BE81F7'}]}/>클릭한 그래프: 그래프를 클릭하시면 우측 상단에서 발전량 값을 확인하실 수 있습니다.</Text>
        </View>
      </View>
    <View style={styles.tailContainer} />
    {/* </ScrollView> */}
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
  </SafeAreaView>

  );
}
  //}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.2,
    //backgroundColor: "#CCC",
    borderBottomColor:'#000',
    borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
   middleContainer: {
    flex: 1,
    padding: '1%'
   // backgroundColor: "#000",
  },
  tailContainer: {
    flex: 0.4,
  //  backgroundColor: "#000",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  topBtn:{
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: wp('1%'),
    marginBottom: wp('1%'),

  },
  topBtnText:{
    color:'#ffffff',
  
  },
  Box: {
    borderColor: "#000",
    //width:"100%",
    height: "100%",
    borderWidth: 2,
    margin: 'auto'

  },
  colorBox:{
    width:10,
    height:10,
   
  },  
  bottomContainer: {
    flex: 0.5,
    padding: '1%'
  },
  bottomBox:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText:{
    fontSize: wp('3%'),
    paddingLeft: wp(2),
    paddingTop: wp(1),
  },
  bottomRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:"50%"
  },
  Boxtitle: {
    fontSize: wp('5%'),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold"
  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Boxsubtitle: {
    fontSize: wp('3%'),
    paddingRight:wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop:  wp('2%'),

  },

});
export default DetailScreen;