
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Perference from '../Perference';

import { SettingIn } from '../styles/styles'

function SettingScreen({ navigation }) {

  const user = Perference.getUser();
  const [price, setPrice] = useState(Perference.getMoney());
  const [Errortext, setErrortext] = useState('오류');

  const onlyNumber = (str) => {
    var num = str.replace(/[^0-9.]/g, "").replace(/(\.*)\./g, "$1");
    setPrice(num);

  };

  const handleSubmitPress = () => {
    if (!price) {
      alert('저장에 실패했습니다.')
    }
    fetch("http://118.131.6.218:8000/investment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plantId_subId: user,
        investment: price,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    Perference.setMoney(price);
    Perference.setReportIndexUserInvestment(price);

    alert('저장되었습니다.');
    navigation.reset({ index: 0, routes: [{ name: '이전' }], });
  };
  return (
    <SettingIn.ContainerWrap>
      <SettingIn.roundHead />
      <SettingIn.container>
        <SettingIn.formArea>
          <SettingIn.Text>금액</SettingIn.Text>
          <SettingIn.textFormBottom
            type="number"
            autoCapitalize="none"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            value={price.toString()}
            onChangeText={(input) => onlyNumber(input)}
          />
          <SettingIn.TextGray>원</SettingIn.TextGray>
        </SettingIn.formArea>
      </SettingIn.container>
      <SettingIn.btn
        activeOpacity={0.5}
        onPress={handleSubmitPress}
      >
        <SettingIn.btnText>저장</SettingIn.btnText>
      </SettingIn.btn>
    </SettingIn.ContainerWrap>
  );
}

export default SettingScreen;