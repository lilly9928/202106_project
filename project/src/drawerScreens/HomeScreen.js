import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';
import { Home } from '../styles/styles';
import {
  View,
  ScrollView
} from 'react-native';
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { RefreshControl } from 'react-native-web-refresh-control'
import * as scale from 'd3-scale'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}
function HomeScreen({ navigation }) {

  const [selectItem, setselectItem] = useState(null);
  const [selectValue, setselectValue] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const date = Perference.getToday();
  const today = new Date();
  const dataDate = today.getHours() + ':' + today.getMinutes() + '기준';
  const dataDay = date.getMonth() + 1 + '월' + date.getDate() + '일';

  //그래프 데이터 디자인 
  const newData = Perference.getDashboard().map(
    (item, index) => ({
      x: index ,
      y: item,
      svg: {
        onPressIn: () => {
          setselectItem(index),
            setselectValue(item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원')
        },
        onPressOut: () => {
          setselectItem(index),
            setselectValue(item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원')
        },
        fill: selectItem === index ? '#000000' : Perference.getDashboardCountReal() - 1 < index ? '#ffb851' : '#385bff',
      }
    })
  );



  //새로고침 
  React.useEffect(() => {
    reloadLines()
  }, [])

  const reloadLines = React.useCallback(() => {
    setRefreshing(true)
    Perference.setTime(new Date());
    wait(5000).then(() => {
      setRefreshing(false)

    })
  }, [])

  return (
    <Home.SafeAreaViewCustom>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={reloadLines} />
        }
      >
        <Home.topContainer>
          <Home.Box>
            <Home.topBox>
              <View>
                <Home.Boxtitle>{dataDay}의 수익</Home.Boxtitle>
                <Home.BoxtitleBig>{Perference.getDashboardTotal() + '원'}</Home.BoxtitleBig>
              </View>
              <Home.BoxtitleSmall>{dataDate}</Home.BoxtitleSmall>
            </Home.topBox>
            <Home.left>
              <Home.middleBox>
                <Home.middleText>{Perference.getDashboardToday() + '원'}</Home.middleText >
                <Home.middlesubText>현재까지 수익</Home.middlesubText >
              </Home.middleBox>
              <Home.middleBox>
                <Home.middleTextYellow>{Perference.getDashboardTodayPredicted() + '원'}</Home.middleTextYellow>
                <Home.middlesubText>잔여시간 예측</Home.middlesubText>
              </Home.middleBox>
            </Home.left>
          </Home.Box>
        </Home.topContainer>
        <Home.middleTopBox>
          <Home.middleBoxTitle>시간대별 수익 그래프</Home.middleBoxTitle>
          <Home.middleBoxsubTitle>{selectValue}</Home.middleBoxsubTitle>
        </Home.middleTopBox>

        <Home.middleContainer>
          <Home.Box>
            <YAxis
              data={Perference.getDashboard()}
              style={{}}
              contentInset={{ top: 10, bottom: 30 }}
              svg={{ fontSize: 13, fill: '#909090' }}
              formatLabel={ value => 
                value>100000?`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(',')[0]}m`:
                 value>1000?`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(',')[0]}k`:`${value}`}
            />
            <ScrollView horizontal={true}>
              <View style={{ width: 350, height: 250, backgroundColor: '#f5f5f5' }}>
                <BarChart
                  style={{ flex: 1 }}
                  data={newData}
                  // svg={{fill: this.state.color,}}
                  yAccessor={({ item }) => item.y}
                  contentInset={{ top: 10, bottom: 10 }}
                  spacingInner={0.1}
                  spacingOuter={0.1}
                  gridMin={1}
                >
                  <Grid direction={Grid.Direction.HORIZONTAL} />
                </BarChart>
                <XAxis
                  style={{}}
                  data={newData}
                  svg={{
                    fill: "#000000",
                    fontSize: 7,
                    fontWeight: "bold",
                  }}
                  scale={scale.scaleBand}
                  xAccessor={({ item }) => item.x}
                  formatLabel={(value) => 
                    value%3!=0?'':value+'시'
                  }
                />
              </View>
            </ScrollView>
          </Home.Box>
        </Home.middleContainer>
        <Home.bottomContainer>
          <Home.bottomBox>
            <Home.bottomBoxRow>
              <Home.colorBox style={{ marginTop: "1%", borderRadius: 100, backgroundColor: "#385bff" }} />
              <View>
                <Home.bottomText>실제 수익</Home.bottomText >
                <Home.bottomsubText>실제 측정된</Home.bottomsubText>
                <Home.bottomsubText>발전 수익 데이터</Home.bottomsubText>
              </View>
              <Home.colorBox style={{ marginTop: "1%", borderRadius: 100, backgroundColor: '#FFBF00' }} />
              <View>
                <Home.bottomText>예측 수익</Home.bottomText>
                <Home.bottomsubText >현재 시간 이후의</Home.bottomsubText>
                <Home.bottomsubText >예측 발전 수익 데이터</Home.bottomsubText>
              </View>
            </Home.bottomBoxRow>

            <Home.bottomTextBox>
              <Home.bottomsubText>그래프 클릭 시 구간 별 수익을 확인할 수 있습니다.</Home.bottomsubText>
            </Home.bottomTextBox>
          </Home.bottomBox>
        </Home.bottomContainer>
        <Home.tailContainer>

        </Home.tailContainer>
      </ScrollView>
    </Home.SafeAreaViewCustom>
  );
}

export default HomeScreen;