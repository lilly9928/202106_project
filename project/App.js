import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/drawerScreens/HomeScreen';
import SettingScreen from './src/drawerScreens/SettingScreen';
import ReportScreen from './src/drawerScreens/ReportScreen';
import DetailScreen from './src/drawerScreens/DetailScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TestStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();



const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <HomeStack.Screen name="홈" component={HomeScreen} />
      <HomeStack.Screen name="상세" component={DetailScreen} />
      <HomeStack.Screen name="리포트" component={ReportScreen} />
      <HomeStack.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
};
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

         <Stack.Screen
                  name="Splash"
                  component={SplashScreen}
                  options={{headerShown: false}}
                />

             <Stack.Screen
               name="Home"
               component={HomeScreen}
             />
            <Stack.Screen name="MainTab" component={MainTabScreen}
             options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default App;