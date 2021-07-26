import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [selectedDate, setselectedDate] = useState(date.format("yyyy/MM/dd"));

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
    <View style={[styles.headContainer, { backgroundColor: "#FF3366" }]}></View>
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
      
    </View>
    <View style={[styles.quarterHeight, { backgroundColor: "#CCC" }]} />
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
   // backgroundColor: "#000",
  },
  quarterHeight: {
    flex: 0.4,
    backgroundColor: "#000",
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
  
  }
});
export default DetailScreen;