import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = {
    topContainer: styled.View`
      flex: 0.8;
      padding: 1%;
      backgroundColor: #2e2e33;
      borderBottomLeftRadius: 30;
      borderBottomRightRadius:30;
    `,
    Box:styled.View`
    borderColor: "#000";
    height: "100%";
    borderWidth: 0;
    flexDirection: "row";
    `,
    topBox:styled.View`
    justifyContent: 'space-between';
    alignItems: 'flex-start';
    width:'50%';
    marginTop:`+wp(5)+`;
    marginLeft:`+wp(5)+`;
    marginBottom:`+wp(5)+`;
    `,
    Boxtitle:styled.Text`
    fontSize:`+wp(5)+`;
    paddingLeft: `+wp(1)+`;
    paddingBottom: `+wp(3)+`;
    paddingTop:`+wp(3)+`;
    color:"white";
    `,
    BoxtitleBig:styled.Text`
    fontSize: `+wp(8)+`;
    paddingLeft: `+wp(1)+`;
    paddingBottom: `+wp(3)+`;
    paddingTop: `+wp(1)+`;
    fontWeight: "bold";
    color:"white";
    `,
    BoxtitleSmall:styled.Text`
    fontSize:`+wp(3)+`;
    justifyContent:'flex-end';
    color: "#909090";
    `,
    left:styled.View`
    alignItems:'flex-end';
    `,
    middleBox:styled.View`
    justifyContent: 'center';
    alignItems: 'center';
    borderRadius: 20;
    backgroundColor: "#222225";
    width:`+wp(40)+`;
    marginTop:`+wp(5)+`;
    marginBottom:`+wp(5)+`;
    `,
    middleText:styled.Text`
    fontSize: `+wp(5)+`;
     paddingTop: `+wp(5)+`;
     fontWeight: "bold";
     color: "#385bff";
    `,
    middlesubText:styled.Text`
    fontSize: `+wp(3)+`;
    color: "#909090";
    paddingBottom: `+wp(5)+`;
    `,
    middleTextYellow:styled.Text`
    fontSize: `+wp(5)+`);
    paddingTop: `+wp(5)+`;
    fontWeight: "bold";
    color: "#ffb851";
    `,
    middleTopBox:styled.View`
    backgroundColor: "#ffffff";
    borderBottomLeftRadius: 30;
    borderBottomRightRadius:30;
    flexDirection: "row";
    justifyContent: 'space-between';
    padding:wp(5);
    `,
    middleBoxTitle:styled.Text`
    color:'black';
    fontSize:`+wp(4)+`;
    `,
    middleBoxsubTitle:styled.Text`
    color:'#3943ff';
    fontWeight:'bold';
    fontSize`+wp(6)+`;
    `,
    middleContainer:styled.View`
    flex: 1;
    backgroundColor:"#f5f5f5";
    padding: '1%';
    `,
    bottomContainer:styled.View`
    flex: 0.5;
    paddingLeft: `+wp(3)+`;
    paddingRight:`+wp(3)+`;
    marginBottom:`+hp(3)+`;
    `,
    bottomBox:styled.View`
    width:'100%';
    flexDirection: "column";
    backgroundColor:"#fff";
    padding: '3%';
    shadowColor: "rgba(0, 0, 0, 0.03)";
    shadowOffset: {
    width: 0;
    height: 0;
    };
  shadowRadius: 16;
  shadowOpacity: 1;
  borderRadius: 16;
    `,
    bottomBoxRow:styled.View`
    flexDirection: "row";
    justifyContent: 'space-around';
    padding:`+wp(5)+`;
    `,
    colorBox:styled.View`
    width: 15;
    height: 15;
    backgroundColor: "#000";
    `,
    bottomText:styled.Text`
    fontSize: `+wp(4)+`;
    fontWeight:'bold;
    `,
    bottomsubText:styled.Text`
    color: "#909090";
    fontWeight:'bold';
    padding:`+wp(1)+`;
    `,
    tailContainer:styled.View`
    flex: 0.4;
    `,
    bottomTextBox:styled.View`
    borderRadius: 8;
    backgroundColor: "#f5f5f5";
    alignItems:"center";
    padding:`+wp(2)+`;
    width:"95%";
    marginLeft:`+wp(2)+`;
    `,
  };