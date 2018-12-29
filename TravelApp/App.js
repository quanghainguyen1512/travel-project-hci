import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNavigationContainer } from 'react-navigation';

import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import MainTabsScreen from './src/navigations/MainTabsScreen';
import CityDetail from './src/screens/CityDetail/CityDetail';
import AboutCity from './src/screens/CityDetail/AboutCity';
import CityStack from './src/navigations/CityStack';

const AppContainer = createNavigationContainer(CityStack);
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      // <PlaceDetail />
      // <MainTabsScreen />
      // <CityDetail />
      <AppContainer />
    );
  }
}
