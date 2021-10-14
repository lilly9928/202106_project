import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text,Image } from 'react-native';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/drawerScreens/HomeScreen';
import SettingScreen from './src/drawerScreens/SettingScreen';
import SettingScreen1 from './src/drawerScreens/SettingScreen1';
import SettingScreen2 from './src/drawerScreens/SettingScreen2';
import ReportScreen from './src/drawerScreens/ReportScreen';
import DetailScreen from './src/drawerScreens/DetailScreen';
import Perference from './src/Perference';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TestStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
import SelectDropdown from 'react-native-select-dropdown'
import { color } from 'react-native-reanimated';

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack" >
      <HomeStack.Screen name="홈" component={HomeScreen} />
      <HomeStack.Screen name="상세" component={DetailScreen} />
      <HomeStack.Screen name="리포트" component={ReportScreen} />
      <HomeStack.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
};
const App = ({ navigation }) => {

  const User = ["test1@", "test2@", "test3@", "test4@"]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

      <Stack.Screen
          name="Setting"
          component={SettingScreen}
        />

      <Stack.Screen
          name="태양광 설치 투자 금액"
          component={SettingScreen1}
        />

<Stack.Screen
          name="시간대별 kW 당 발전 수익 설정"
          component={SettingScreen2}
        />

<Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="이전" component={MainTabScreen}
          options={{
            headerLeft: () => {
              return null;
            },
            headerTitle: () => (
              <View  style={styles.Header}>
                 <Image
                style={styles.logo}
                source={require('./src/Image/logo.png')}
                  />
            <View style={{width:wp(28)}} />
               <SelectDropdown
                data={User}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.title;
                }}
                defaultButtonText={Perference.getUser()}
                //defaultButtonText="김지나"
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.BtnTextStyle}
                
                 /> 
                 </View>
            ),
            headerStyle: {
              backgroundColor: '#2e2e33',
              shadowColor:'transparent'
            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center"
  },
  dropdown1BtnStyle: {
    flex: 1,
    height: 60,
    backgroundColor: '#2e2e33',
   // marginTop:hp(1) 
  },
  BtnTextStyle:{
    color: "#c9c9c9", 
    textAlign: "left",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#202023",
    paddingLeft:wp(4),
    paddingTop:wp(2),
    paddingBottom:wp(1),
    marginTop:wp(5.5),
    marginLeft:wp(7)
  },
  logo:{
    width:wp(30),
    resizeMode: 'contain',
   // marginTop:hp(3),
    //marginLeft:wp(4)

  },
  Header:{
    flexDirection:"row",
   justifyContent:"space-between"
  }
});

export default App;