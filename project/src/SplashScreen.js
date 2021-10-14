// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image,Text} from 'react-native';
import Perference from './Perference';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      var value=null;
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes')
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={require('./Image/splash.png')}
          />
      <ActivityIndicator
        animating={animating}
        color="#6990F7"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e33',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  logo:{
    width:wp(50),
    resizeMode: 'contain',
    marginBottom:hp(8),
    marginLeft:wp(4)

  },
});