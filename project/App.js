import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LoginScreen from './src/LoginScreen';
import SplashScreen from './src/SplashScreen';
import HomeScreen from './src/drawerScreens/HomeScreen';
import SettingScreen from './src/drawerScreens/SettingScreen';
import SettingScreen1 from './src/drawerScreens/SettingScreen1';
import SettingScreen2 from './src/drawerScreens/SettingScreen2';
import ReportScreen from './src/drawerScreens/ReportScreen';
import DetailScreen from './src/drawerScreens/DetailScreen';
import Perference from './src/Perference';


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
    <Tab.Navigator initialRouteName="HomeStack">
      <HomeStack.Screen name="홈" component={HomeScreen} />
      <HomeStack.Screen name="상세" component={DetailScreen} />
      <HomeStack.Screen name="리포트" component={ReportScreen} />
      <HomeStack.Screen name="설정" component={SettingScreen} />
    </Tab.Navigator>
  );
};
const App = ({ navigation }) => {

// function App({ navigation }) =>{
// const App: () => React$Node = () => {
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
          name="Setting1"
          component={SettingScreen1}
        />

<Stack.Screen
          name="Setting2"
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

        <Stack.Screen name="MainTab" component={MainTabScreen}
          options={{
            headerLeft: () => {
              return null;
            },
            headerTitle: () => (
              <SelectDropdown
                data={User}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                defaultButtonText={Perference.get()}
                buttonStyle={styles.dropdown1BtnStyle}
                 />
            ),

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
   
    backgroundColor: "#FFF",

  },
});

export default App;