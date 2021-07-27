import React , { useState }from 'react';
import {SafeAreaView, StyleSheet,View,TouchableOpacity,Text} from 'react-native';
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
import {Picker} from '@react-native-picker/picker';


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
  const [selectedValue, setSelectedValue] = useState("java");
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
              options={{
                headerLeft: () => {
                  return null;
                },
                headerTitle:() => (
                //   <View style={styles.container}>
                //   <Picker
                //   selectedValue={selectedValue}
                //   style={{ height: 10, width: 150 }}
                //   onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                // >
                //   <Picker.Item label="사용자1" value="test1@" />
                //   <Picker.Item label="사용자2" value="test2@" />
                //   <Picker.Item label="사용자3" value="test3@" />
                //   <Picker.Item label="사용자4" value="test4@" />
                //   <Picker.Item label="사용자5" value="test5@" />
                // </Picker>
                // </View>
               <TouchableOpacity
                //style={styles.btn}
                activeOpacity={0.5}
                //onPress={handleSubmitPress}
              >
                <Text style={(styles.Text, { color: '#000000' })}>사용자</Text>
              </TouchableOpacity>
                ),
               
              }}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center"
  }
});

export default App;