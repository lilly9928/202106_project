
import styled from 'styled-components/native';

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
    padding-top: 1%;
    font-weight: bold;
    color:white;
    `,
    BoxtitleSmall:styled.Text`
    font-size:20px;
    justify-content:flex-end;
    color: #ffffff;
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
    color: #ffffff;
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
    color:#ffffff;
    font-size:13px;
  `,
    borderText:styled.Text`
    color:#ffffff;
    font-size:13px;
    `,
    dateText:styled.Text`
    color:#ffffff;
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
    color:#292929;
    padding-top:1%;`,
    middleContainer:styled.View`
    flex: 1;
    background-color:#f5f5f5;
    padding: 1%;`,
    Box:styled.View`
    height: 100%;
    border:0;
    flex-direction: row;`,
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
  export const Detail ={
    container:styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color: #f5f5f5;`,
    topContainer:styled.View`
    flex-direction: column;
    justify-content: space-between;
    background-color: #2e2e33;
    position:relative;
    padding-bottom:4%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius:30px;`,

    topDate:styled.View`
   
    flex-direction: row;
    justify-content: space-between;
    background-color: #2e2e33;
    position:relative;
    margin-bottom:5%;`,

    topBtn:styled.TouchableOpacity`
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin: 1%;
`,
    topBtnText:styled.Text`
    color: #ffffff;
    font-size:20px;
    padding-left:1%;
    padding-right:1%;
    `,
    topBox:styled.View`
    flex-direction: row;
    justify-content: space-around;`,
    topRoundBtn:styled.TouchableOpacity`
    border-radius: 20px;
    background-color: #222225;
    padding-left:6%;
    padding-right:6%;
    padding-top:1%;
    padding-bottom:1%;`,
    topRoundBtnText:styled.Text`
    font-size:20px;
    color:#ffffff;`,
    middleContainer:styled.View`
    flex: 1;
    background-color: #fff;
    position:relative;
    margin-bottom:10%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius:30px;`,
    middleBox:styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left:5%;
    margin-right:5%;
    margin-top:5%;`,
    Boxtitle:styled.Text`
    font-size: 20px;
    padding-left: 1%;
    padding-bottom: 3%;
    padding-top: 1%;
    font-weight: bold;`,
    Boxsubtitle:styled.Text`
    font-size: 20px;
    padding-right: 1%;
    padding-bottom: 3%;
    padding-top:2%;
    font-weight:bold;`,
    Box:styled.View`
    height: 50%;
    border:0;
    flex-direction: row;`,
    bottomContainer:styled.View`
    flex: 0.5;
    padding-left: 3%;
    padding-right: 3%;
    margin-bottom:3%;`,
    bottomBox:styled.View`
    width:100%;
    flex-direction: column;
    background-color:#f5f5f5;
    padding: 3%;
    border-radius: 16px;
`,
    bottomBoxRow:styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding:5%;`,
    colorBox:styled.View`
    width: 15px;
    height: 15px;
    background-color: #000;`,
    bottomText:styled.Text`
    font-size:20px;
    font-weight:bold;
`,
    bottomsubText:styled.Text`
    color: #909090;
    font-weight:bold;
    padding:1%;`,
    bottomTextBox:styled.View`
    border-radius: 8px;
    background-color: #ffffff;
    align-items:center;
    padding:2px;
    width:95%;
    margin-left:2px;`,
    tailContainer:styled.View`
    flex: 0.4;
    padding: 1%;
    margin-bottom:5%;
    padding-left: 5%;
    padding-right:5%;`,

  }
export const Setting ={
    container:styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color:#f5f5f5;`,
    roundHead:styled.View`
    background-color:#2e2e33;
    width:100%;
    border-bottom-right-radius:30px;
    border-bottom-left-radius:30px;
    height:4%;`,
    topInfo:styled.View`
    flex-direction: row;
    border-bottom-right-radius:30px;
    border-bottom-left-radius:30px;
    border-style:solid;
    width:100%;
    height:13%;
    background-color: #ffffff;
    margin-bottom:3%;
    justify-content:center;`,
    topInfoText:styled.Text`
    font-size: 20px;
    padding-top: 7%;`,
    btnWrap:styled.View`
    padding-left: 5%;
    padding-right: 5%;`,
    btnStyle:styled.View`
    flex-direction: row;
    border-radius:20px;
    border-style:solid;
    width:100%;
    margin-bottom:3%;
    background-color: #ffffff;
    border-color:#c9c9c9;
    border-width:1px;
    justify-content:space-between;
    padding-right:5%;`,
    Text:styled.Text`
    font-size: 20px;
    padding-bottom: 5%;
    padding-top: 7%;
    padding-left:5%;`,
    btn:styled.TouchableOpacity`
    padding-left: 40%;
    padding-right:40%;
    margin-top:15%;`,
    bottomText:styled.View`
    align-items:center;
    border-style:solid;
    border-width:1px;
    border-color:#2e2e33;
    border-radius:16px;
    padding-bottom:2%;
    padding-top:2%;`,
    smallText:styled.Text`
    text-align:center;
    padding-top:2%;`,

}

export const SettingIn ={
  ContainerWrap:styled.SafeAreaView`
  height:100%;`,
  roundHead:styled.View`
  background-color:#2e2e33;
  width:100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius:30px;
  height:3%;`,
  roundHead2:styled.View`
  background-color:#2e2e33;
  width:100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius:30px;
  height:10px;`,
  container:styled.View`
  flex-direction: column;
  background-color:#f5f5f5;
  padding-left:5%;
  padding-right:5%;`,
  formArea:styled.View`
  flex-direction: row;
  padding-top: 2%;
  padding-bottom:2%;
  background-color:#ffffff;
  border-radius:20px;
  margin-top:4%;
  padding-left:4%;
  padding-right:4%;
  justify-content:space-around;`,
  Text:styled.Text`
  font-size: 20px;
  padding-bottom:5%;
  padding-top: 5%;
  padding-right:5%;`,
  textFormBottom:styled.TextInput`
  width: 70%;
  text-align:right;
  font-size:20px;
  `,
  TextGray:styled.Text`
  font-size: 20px;
  padding-bottom: 5%;
  padding-top: 5%;
  padding-right:5%;
  color:#292929;`,
  btn:styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: #292929;
  bottom:0;
  position:absolute;
  `,
  btnText:styled.Text`
  padding-bottom: 5%;
  padding-top: 5%;
  padding-right:2%;
  color: white;
  font-size:20px;`,
  
  title:styled.Text`
  text-align:center;
  font-size:20px;
  color:#292929;
  margin-top:5%;
  margin-bottom:3%;
  padding-top:2%`,
  hide:styled.Text`
  opacity:0;
  margin-top:30%;
  `
}
export const Login ={
  container:styled.View`
  flex-direction:column;
  background-color:#f5f5f5;`,
  topArea:styled.View`
    width:100%;
    padding-top: 20%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius:30px;
    background-color:#2e2e33;`,
  logo:styled.Image`
  width:40%;
  resize-mode: contain;
  marginBottom:8px;
  marginLeft:4px;`,
  formArea:styled.View`
  justify-content: center;
  padding-top: 5%;
  padding-left: 7%;
  padding-right: 7%;`,
  inputArea:styled.View`
  flex-direction: row;
  background-color:#ffffff;
  border-radius:16px;
  width: 100%;
  height: 20%;
  margin-bottom:5%;`,
  Text:styled.Text`
  font-size: 18px;
    padding-bottom: 5%;
    padding-top: 5%;
    color:#909090;
    padding-left:3%;`,
  textFormTop:styled.TextInput`
  padding-left: 30px;
  padding-right: 10px;
  border-width:0;
  background-color:#ffffff;
  border-radius:16px;
  color:#909090;
  font-size: 15px;
`,
  textFormBottom:styled.TextInput`
  padding-left: 30px;
  padding-right: 10px;
  border-width:0;
  background-color:#ffffff;
  border-radius:16px;
  color:#909090;
  font-size: 15px;`,
  TextValidationText:styled.Text`
  font-size:20px;
  color: red;
  text-align:center;`,
  btnArea:styled.View`
  height: 10%;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5%;
  padding-left: 7%;
  padding-right: 7%;`,
  btn:styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  background-color: #292929;`,
  titleArea:styled.View`
  justify-content: center;
  padding-top:0;
  height:7%;
  `
}


