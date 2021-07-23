import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function ReportScreen({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.topContainer} />
    <View style={styles.middleContainer} />
    <View style={[styles.quarterHeight, { backgroundColor: "#CCC" }]} />
    <View style={[styles.quarterHeight, { backgroundColor: "#FF3366" }]} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    flex: 0.8,
    backgroundColor: "#FF3366",
  }, 
   middleContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  quarterHeight: {
    flex: 0.4,
    backgroundColor: "#000",
  },
});
export default ReportScreen;