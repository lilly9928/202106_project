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
  }
  export const Report = {
    container:styled.SafeAreaView `
    flex: 1;
    flex-direction: column;
    background-color:#f5f5f5;
    `,
    topContainerWrap:styled.View`
    background-color:#2e2e33;
    border-bottom-right-radius:30px;
    border-bottom-left-radius:30px;
    padding-top:3%;
    `,
    topContainer:styled.View`
    flex: 0.8;
    padding: 1%;
    flex-direction: row;
    justify-content: space-around;
    text-align:center;
    
    `,
    colorBox:styled.View`
    width: 15px;
    height: 15px;
    background-color: #000;
    `,
    borderBox:styled.View`
    background-color:#222225;
    padding-top:5%;
    padding-bottom:20%;
    padding-left:3%;
    padding-right:3%;
    border-radius:20px;
    align-items: center;
    `,
    Boxtitle:styled.Text`
    font-size: 20px;
    padding-left: 1%;
    padding-bottom: 3%;
    padding-top: 1%;
    font-weight: bold;
    color:#ffffff;
    `,
    middlePriceTextYellow:styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 1%;
    color:#ffb851;
    `,
    middlePriceTextBlue:styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 1%;
    color:#385bff;
    `,
    insideMiddleBoxWrap:styled.View`
    margin-top:7px;
    `,
    insideMiddleBox:styled.View`
    flex-direction: row;
    width:100%;
    `,
    bordersubText:styled.Text`
    color:#909090;
    font-size:13px;
  `,
    borderText:styled.Text`
    color:#ffffff;
    font-size:13px;
    `,
    dateText:styled.Text`
    color:#909090;
    font-size:13px;
    padding-left:3.5%;
    padding-top:4%;`,
    middle_topBox:styled.View`
    background-color: #ffffff;
    border-bottom-right-radius:30px;
    border-bottom-left-radius:30px;
    flex-direction: row;
    justify-content: space-between;
    padding:5%;`,
    middle_Boxtitle:styled.Text`
    color:black;
    font-size:20px;`,
    middle_Boxsubtitle:styled.Text`
    color:#000000;
    font-weight:bold;
    font-size:20px;
    `,
    middle_BoxsubtitleDate:styled.Text`
    font-size:20px;
    color:#909090;
    padding-top:1%;`,
    middleContainer:styled.View`
    flex: 1;
    padding: 1%;
    background-color:#f5f5f5;
    margin-bottom:10%;`,
    Box:styled.View``,
    bottomContainer:styled.View`
    flex: 0.5;
    `,
    bottomBox:styled.View`
    width:95%;
    margin-left:2%;
    flex-direction: row;
    background-color:#ffffff;
    padding: 5%;
    border-radius: 16px;
    justify-content:space-between;
    margin-bottom:5%;`,
    
    columnBox:styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding-top:2%;`,
    bottomText:styled.Text`
    color:#000000;
    font-size:20px;
    font-weight:bold;
    margin-bottom:7%;`,
    
  }
