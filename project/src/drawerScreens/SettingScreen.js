
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';

import { RefreshControl } from 'react-native-web-refresh-control'
import {
  Text,
  TouchableOpacity
} from 'react-native';

import {Setting} from '../styles/styles'


function SettingScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

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
    
    <Setting.container>
      <Setting.roundHead/>
        <Setting.topInfo>
          <TouchableOpacity
                  activeOpacity={0.5}
                >
            <Setting.topInfoText>안녕하세요.{Perference.getUser()}님</Setting.topInfoText>
            </TouchableOpacity>
        </Setting.topInfo>

        <Setting.btnWrap>
            <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('태양광 설치 투자 금액')}
                >
              <Setting.btnStyle>
                <Setting.Text>태양광 설치 투자 금액</Setting.Text>
                <Setting.Text>&gt;</Setting.Text>
              </Setting.btnStyle>
            </TouchableOpacity>
            <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('시간대별 kW 당 발전 수익 설정')}
                >
              <Setting.btnStyle>
                  <Setting.Text>시간대별 kW 당 발전 수익 설정</Setting.Text>
                  <Setting.Text>&gt;</Setting.Text>
              </Setting.btnStyle>
          </TouchableOpacity>
        </Setting.btnWrap>
        <Setting.btn
            activeOpacity={0.5}
            onPress={() => {
              Perference.setUser('');
              navigation.navigate('Login')}}
          >
                  <Setting.bottomText>
                    <Text>로그아웃</Text>
                  </Setting.bottomText>
        </Setting.btn>
            <Setting.smallText >앱 버전 v1.0</Setting.smallText>
    </Setting.container>
  );
}

export default SettingScreen;