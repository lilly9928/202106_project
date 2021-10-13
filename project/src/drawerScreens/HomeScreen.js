
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';

import { BarChart, Grid } from 'react-native-svg-charts'
import { RefreshControl } from 'react-native-web-refresh-control'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}



function HomeScreen({ navigation }) {

  const [selectItem, setselectItem] = useState(null);
  const [selectValue, setselectValue] = useState(null);
  const [refreshing, setRefreshing] = useState(false);


  const data = Perference.getDashboard();
  const date = new Date();
  const dataDate = date.getHours()+':'+date.getMinutes()+'기준';
  const dataDay = date.getMonth()+'월'+date.getDate()+'일';

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
        fill: selectItem === index ? '#000000' : date.getHours() < index ? '#ffb851' : '#385bff',
      }
    })
  );

  React.useEffect(() => {
    reloadLines()
  }, [])

  const reloadLines = React.useCallback(() => {
    setRefreshing(true)

    wait(2000).then(() => {
      setRefreshing(false)
      
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={reloadLines} />
        }
      >
      <View style={styles.topContainer}>
        <View style={styles.Box}>
          <View style={styles.topBox}>
            <View>
          <Text style={styles.Boxtitle}>{dataDay}의 수익</Text>
          <Text style={styles.BoxtitleBig}>{Perference.getDashboardTotal()+'원'}</Text>
          </View>
          <Text style={styles.BoxtitleSmall}>{dataDate}</Text>
          </View>
          <View style={styles.left}>
          <View style={styles.middleBox}>
            <Text style={styles.middleText}>{Perference.getDashboardTotal()+'원'}</Text>
            <Text style={styles.middlesubText}>현재까지 수익</Text>
          </View>
          <View style={styles.middleBox}>
          <Text style={styles.middleTextYellow}>{Perference.getDashboardToday()+'원'}</Text>
            <Text style={styles.middlesubText}>잔여시간 예측</Text>
          </View>
          </View>
        </View>
      </View>
      <View style={styles.middle_topBox}>
            <Text style={styles.middle_Boxtitle}>시간대별 수익 그래프</Text>
            <Text style={styles.middle_Boxsubtitle}>{selectValue}</Text>
          </View>
      
      <View style={styles.middleContainer}>
        <View style={styles.Box}>
        <ScrollView horizontal={true}>
          <View style={{  width:500,height: 200,backgroundColor:'#f5f5f5'}}>
            <BarChart
              style={{ flex: 1}}
              data={newData}
              // svg={{fill: this.state.color,}}
              yAccessor={({ item }) => item.y}
              contentInset={{ top: 10, bottom: 10 }}
              spacingInner={0.35}
              spacingOuter={0.3}
              gridMin={1}
            >
              <Grid direction={Grid.Direction.HORIZONTAL}/>
            </BarChart>
          </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer} >
        <View style={styles.bottomBox}>
          <View style={styles.bottomBoxRow}>
          <View style={[styles.colorBox, { marginTop: wp(1),borderRadius:100,backgroundColor: "#385bff" }]} />
            <View>
              <Text style={styles.bottomText}>실제 수익</Text>
              <Text style={styles.bottomsubText}>실제 측정된</Text>
              <Text style={styles.bottomsubText}>발전 수익 데이터</Text>
            </View>
            <View style={[styles.colorBox, { marginTop: wp(1),borderRadius:100,backgroundColor: '#FFBF00' }]} />
            <View>
              <Text style={styles.bottomText}>예측 수익</Text>
              <Text style={styles.bottomsubText}>현재 시간 이후의</Text>
              <Text style={styles.bottomsubText}>예측 발전 수익 데이터</Text>
            </View>
          </View>

          <View style={styles.bottomTextBox}>
              <Text style={styles.bottomsubText}>그래프 클릭 시 구간 별 수익을 확인할 수 있습니다.</Text>
          </View>
        </View>
      </View>
      <View style={styles.tailContainer}>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#f5f5f5"
  },
  headContainer: {
    flex: 0.30,
  },
  topContainer: {
    flex: 0.8,
    padding: '1%',
    backgroundColor: "#2e2e33",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,

  },
  middleContainer: {
    flex: 1,
    backgroundColor:"#f5f5f5",
    padding: '1%'
  },
  bottomContainer: {
    flex: 0.5,
    paddingLeft: wp(3),
    paddingRight: wp(3),
    marginBottom:hp(3)
  },
  bottomBoxRow:{
    flexDirection: "row",
    justifyContent: 'space-around',
    padding:wp(5)
  },
  tailContainer: {
    flex: 0.4,
  },
  Box: {
    borderColor: "#000",
    height: "100%",
    borderWidth: 0,
    flexDirection: "row",

  },
  left:{
    alignItems:'flex-end'
  },
  Boxtitle: {
    fontSize: wp('5%'),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    color:"white"
  },
  BoxtitleBig:{
    fontSize: wp(8),
    paddingLeft: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('1%'),
    fontWeight: "bold",
    color:"white"
  },
  BoxtitleSmall:{
    fontSize: wp(3),
    justifyContent:'flex-end',
    color: "#909090",
  },
  Boxsubtitle: {
    fontSize: wp('3%'),
    paddingRight: wp('1%'),
    paddingBottom: wp('3%'),
    paddingTop: wp('2%'),
    color:"white"

  },
  topBox: {
   justifyContent: 'space-between',
    alignItems: 'flex-start',
    width:'50%',
    marginTop:wp(5),
    marginLeft:wp(5),
    marginBottom:wp(5)
    
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
    color:'#3943ff',
    fontWeight:'bold',
    fontSize:wp(6)
  },
  middleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: "#222225",
    width:wp(40),
    marginTop:wp(5),
    marginBottom:wp(5),
  },
  middleText: {
    fontSize: wp(5),
   // paddingLeft: wp(1),
    paddingTop: wp(5),
    fontWeight: "bold",
    color: "#385bff"
  },
  middleTextYellow: {
    fontSize: wp(5),
   // paddingLeft: wp(1),
    paddingTop: wp(5),
    fontWeight: "bold",
    color: "#ffb851"
  },
  middlesubText:{ 
    fontSize: wp(3),
    color: "#909090",
    paddingBottom: wp(5),

  },
  bottomBox: {
    width:'100%',
    flexDirection: "column",
    backgroundColor:"#fff",
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
  colorBox: {
    width: 15,
    height: 15,
    backgroundColor: "#000"

  },
  bottomTextBox:{
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    alignItems:"center",
    padding:wp(2),
    width:"95%",
    marginLeft:wp(2)

  }
});
export default HomeScreen;