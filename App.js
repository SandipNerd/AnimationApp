/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import FlatListAnimation from './src/screens/FlatlistAnimation';
import CarouselScreen from './src/screens/CarouselScreen';
import FakeScreen from './src/FakeScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      {/* <CarouselScreen /> */}
      <FakeScreen />
      {/* <FlatListAnimation /> */}
    </View>
  );
};

export default App;
