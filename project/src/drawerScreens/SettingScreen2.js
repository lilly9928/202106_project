import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';

import {
  ScrollView,
} from 'react-native';

import { SettingIn } from '../styles/styles'

function SettingScreen({ navigation }) {

  const [data, setData] = useState([]);

  const onlyNumber = (str, changeindex) => {
    var num = str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
    var temp_data = [...data];
    var temp_element = { ...temp_data[changeindex] };
    temp_element = num;
    temp_data[changeindex] = temp_element;
    setData(temp_data);
  };

  const handleSubmitPress = () => {
    if (!data) {
      alert('저장에 실패했습니다.')
    }
    fetch("http://118.131.6.218:8000/charge", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plantId_subId: Perference.getUser(),
        charge: data,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert('저장되었습니다.');
    navigation.reset({ index: 0, routes: [{ name: '이전' }], });
  };

  return (
    <SettingIn.ContainerWrap >
      <ScrollView>
        <SettingIn.roundHead2 />
        <SettingIn.container>
          <SettingIn.title>0~6H</SettingIn.title>
          <SettingIn.formArea><SettingIn.Text>0~1H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[0].toString()}
              onChangeText={(input) => onlyNumber(input, 0)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>1~2H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[1].toString()}
              onChangeText={(input) => onlyNumber(input, 1)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>2~3H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[2].toString()}
              onChangeText={(input) => onlyNumber(input, 2)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>3~4H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[3].toString()}
              onChangeText={(input) => onlyNumber(input, 3)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>4~5H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[4].toString()}
              onChangeText={(input) => onlyNumber(input, 4)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>5~6H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[5].toString()}
              onChangeText={(input) => onlyNumber(input, 5)}
            /></SettingIn.formArea>
          <SettingIn.title>6~12H</SettingIn.title>
          <SettingIn.formArea><SettingIn.Text>6~7H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[6].toString()}
              onChangeText={(input) => onlyNumber(input, 6)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>7~8H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //   value={data[7].toString()}
              onChangeText={(input) => onlyNumber(input, 7)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>8~9H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //   value={data[8].toString()}
              onChangeText={(input) => onlyNumber(input, 8)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>9~10H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[9].toString()}
              onChangeText={(input) => onlyNumber(input, 9)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>10~11H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[10].toString()}
              onChangeText={(input) => onlyNumber(input, 10)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>11~12H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[11].toString()}
              onChangeText={(input) => onlyNumber(input, 11)}
            /></SettingIn.formArea>
          <SettingIn.title>12~18H</SettingIn.title>
          <SettingIn.formArea><SettingIn.Text>12~13H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[12].toString()}
              onChangeText={(input) => onlyNumber(input, 12)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>13~14H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[13].toString()}
              onChangeText={(input) => onlyNumber(input, 13)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>14~15H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[14].toString()}
              onChangeText={(input) => onlyNumber(input, 14)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>15~16H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[15].toString()}
              onChangeText={(input) => onlyNumber(input, 15)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>16~17H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[16].toString()}
              onChangeText={(input) => onlyNumber(input, 16)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>17~18H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[17].toString()}
              onChangeText={(input) => onlyNumber(input, 17)}
            /></SettingIn.formArea>
          <SettingIn.title>18~24H</SettingIn.title>
          <SettingIn.formArea><SettingIn.Text>18~19H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[18].toString()}
              onChangeText={(input) => onlyNumber(input, 18)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>19~20H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[19].toString()}
              onChangeText={(input) => onlyNumber(input, 19)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>20~21H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[20].toString()}
              onChangeText={(input) => onlyNumber(input, 20)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>21~22H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[21].toString()}
              onChangeText={(input) => onlyNumber(input, 21)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>22~23H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              // value={data[22].toString()}
              onChangeText={(input) => onlyNumber(input, 22)}
            /></SettingIn.formArea>
          <SettingIn.formArea><SettingIn.Text>23~24H </SettingIn.Text>
            <SettingIn.textFormBottom
              autoCapitalize="none"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              //  value={data[23].toString()}
              onChangeText={(input) => onlyNumber(input, 23)}
            /></SettingIn.formArea>

          <SettingIn.hide value={data}></SettingIn.hide>
        </SettingIn.container>
        <SettingIn.btn
          activeOpacity={0.5}
          onPress={handleSubmitPress}
        >
          <SettingIn.btnText>저장</SettingIn.btnText>
        </SettingIn.btn>
      </ScrollView>
    </SettingIn.ContainerWrap >
  );
}

export default SettingScreen;