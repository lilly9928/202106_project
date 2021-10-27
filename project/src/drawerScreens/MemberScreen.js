import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';
import Perference from '../Perference';
import {Setting} from '../styles/styles'

import { useDispatch } from 'react-redux';
import { LoginRequestAction } from '../reducers/user';



function MemberScreen({ navigation }) {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <Setting.btnWrap>
                <TouchableOpacity onPress={ ()=>{
                      Perference.setUser(item.value);
                      dispatch(LoginRequestAction({userEmail:item.value,TodayConvert:Perference.getConvertToday()}));
                      navigation.reset({ index: 0, routes: [{ name: '이전' }], });
                }}>
                <Setting.btnStyle>
                <Setting.Text>{item.value}</Setting.Text>
                 </Setting.btnStyle>
                </TouchableOpacity>
                </Setting.btnWrap>
  );

  return (
    <SafeAreaView style={{flex:1, padding:16,}}>
      <FlatList
        data={Perference.getUsers()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MemberScreen;

