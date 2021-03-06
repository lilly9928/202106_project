import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image,StatusBar } from 'react-native';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/drawerScreens/HomeScreen';
import SettingScreen from './src/drawerScreens/SettingScreen';
import SettingScreen1 from './src/drawerScreens/SettingScreen1';
import SettingScreen2 from './src/drawerScreens/SettingScreen2';
import MemberScreen from './src/drawerScreens/MemberScreen';
import ReportScreen from './src/drawerScreens/ReportScreen';
import DetailScreen from './src/drawerScreens/DetailScreen';
import Perference from './src/Perference';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers/user';


import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


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
const HomeStack = createStackNavigator();


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
    <Tab.Navigator initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let style;
          if (route.name === '홈') {
            iconName = focused ? require('./src/Image/home_circle.png') : require('./src/Image/home.png');
            style = focused ? styles.bottomnav_icon_click_home : styles.bottomnav_icon;
          } else if (route.name === '설정') {
            iconName = focused ? require('./src/Image/setting_circle.png') : require('./src/Image/setting.png');
            style = focused ? styles.bottomnav_icon_click : styles.bottomnav_icon;
          } else if (route.name === '상세') {
            iconName = focused ? require('./src/Image/detail_circle.png') : require('./src/Image/detail.png');
            style = focused ? styles.bottomnav_icon_click : styles.bottomnav_icon;
          } else if (route.name === '리포트') {
            iconName = focused ? require('./src/Image/report_circle.png') : require('./src/Image/report.png');
            style = focused ? styles.bottomnav_icon_click : styles.bottomnav_icon;
          }
          return <Image style={style} source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#292929',
        inactiveTintColor: '#909090',
        style: {
          backgroundColor: '#f5f5f5',
          height: hp(10),
          shadowColor: 'transparent',
          borderWidth: 0
        },
      }}
    >
      <HomeStack.Screen name="홈" component={HomeScreen} />
      <HomeStack.Screen name="상세" component={DetailScreen} />
      <HomeStack.Screen name="리포트" component={ReportScreen} />
      <HomeStack.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
         <StatusBar barStyle="light-content"/>
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
          options={{
            headerTitleStyle: {
              fontSize: wp(4),
              color: '#909090'
            },
            headerStyle: {
              backgroundColor: '#2e2e33',
              shadowColor: 'transparent'

            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="시간대별 kW 당 발전 수익 설정"
          component={SettingScreen2}
          options={{
            headerTitleStyle: {
              fontSize: wp(4),
              color: '#909090'
            },
            headerStyle: {
              backgroundColor: '#2e2e33',
              shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="유저 변경"
          component={MemberScreen}
          options={{
            headerTitleStyle: {
              fontSize: wp(4),
              color: '#909090'
            },
            headerStyle: {
              backgroundColor: '#2e2e33',
              shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
          }}
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
          options={({ navigation }) => ({
            headerLeft: () => {
              return null;
            },
            headerTitle: () => (
              <View style={styles.Header}>
                <Image
                  style={styles.logo}
                  source={require('./src/Image/logo.png')}
                />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity style={styles.dropdown1BtnStyle}
                onPress={() => navigation.navigate('유저 변경')}>
                <Text style={styles.BtnTextStyle}>{Perference.getUser()}</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#2e2e33',
              shadowColor: 'transparent',
            },
          })}
        />

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
  BtnTextStyle: {
    color: "#ffffff",
    textAlign: "left",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#202023",
    paddingBottom: wp(2),
    paddingRight: wp(3),
    paddingLeft: wp(4),
    paddingTop: wp(2),
    paddingBottom: wp(1),
    marginTop: wp(4),
    marginRight: wp(3)
  },
  logo: {
    width: wp(30),
    resizeMode: 'contain',

  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomnav_icon: {
    width: wp(5),
    resizeMode: 'contain',
  },
  bottomnav_icon_click: {
    width: wp(13),
    resizeMode: 'contain',
  },
  bottomnav_icon_click_home: {
    width: wp(10),
    resizeMode: 'contain',
  },
});

export default AppWrapper;