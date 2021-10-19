import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Home = {
  SafeAreaViewCustom:styled.SafeAreaView `
    flex: 1;
    flex-direction: column;
    background-color:#f5f5f5;
  `,
    topContainer: styled.View`
      flex: 0.8;
      padding: 1%;
      background-color: #2e2e33;
      border-bottom-right-radius:30px;
      border-bottom-left-radius:30px;
    `,
    Box:styled.View`
    height: 100%;
    border:0;
    flex-direction: row;
    `,
    topBox:styled.View`
    justifyContent: space-between;
    alignItems: flex-start;
    width:45%;
    margin:5%;
    `,
    // topBox:styled.View`
    // justifyContent: space-between;
    // alignItems: flex-start;
    // width:'50%';
    // marginTop:5%;
    // marginLeft:5%;
    // marginBottom:5%;
    //`,
    Boxtitle:styled.Text`
    font-size:25px;
    padding-left: 1%;
    padding-bottom: 3%;
    padding-top:3%;
    color:white;
    `,
    BoxtitleBig:styled.Text`
    font-size: 30px;
    padding-left: 1%;
    padding-bottom: 3%;
    paddingTop: 1%;
    font-weight: bold;
    color:white;
    `,
    BoxtitleSmall:styled.Text`
    font-size:20px;
    justify-content:flex-end;
    color: #909090;
    `,
    left:styled.View`
    align-items:flex-end;
    `,
    middleBox:styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #222225;
    width:100%;
    margin-top:5%;
    margin-bottom:5%;
    padding-left:10%;
    padding-right:10%;
    padding-top:4%;
    padding-bottom:4%;
    `,
    middleText:styled.Text`
    font-size: 23px;
     padding-top: 5%;
     font-weight: bold;
     color: #385bff;
    `,
    middlesubText:styled.Text`
    font-size: 15px;
    color: #909090;
    padding-bottom: 5%;
    `,
    middleTextYellow:styled.Text`
    font-size: 23px;
    padding-top: 5%;
    font-weight: bold;
    color: #ffb851;
    `,
    middleTopBox:styled.View`
    background-color: #ffffff;
    border-bottom-right-radius:30px;
    border-bottom-left-radius:30px;
    flex-direction: row;
    justify-content: space-between;
    padding:5%;
    `,
    middleBoxTitle:styled.Text`
    color:black;
    font-size:18px;
    `,
    middleBoxsubTitle:styled.Text`
    color:#3943ff;
    font-weight:700;
    font-size:23px;
    `,
    middleContainer:styled.View`
    flex: 1;
    background-color:#f5f5f5;
    padding: 1%;
    `,
    bottomContainer:styled.View`
    flex: 0.5;
    padding-left:3%;
    padding-right:3%;
    margin-bottom:3%;
    `,
    bottomBox:styled.View`
    width:100%;
    flex-direction: column;
    background-color:#fff;
    padding: 3%;
    shadow-color: rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    `,
    bottomBoxRow:styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding:5%;
    `,
    colorBox:styled.View`
    width: 15px;
    height: 15px;
    background-color: #000;
    `,
    bottomText:styled.Text`
    font-size: 18px;
    font-weight:700;
    `,
    bottomsubText:styled.Text`
    color: #909090;
    font-weight:bold;
    padding:1%;
    `,
    tailContainer:styled.View`
    flex: 0.4;
    `,
    bottomTextBox:styled.View`
    border-radius: 8px;
    background-color: #f5f5f5;
    align-items:center;
    padding:2%;
    width:95%;
    margin-left:2%;
    `,
  };