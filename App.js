import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import dailyPick from './screens/dailyPick';
import homeScreen from './screens/homeScreen';
import spacecrafts from './screens/spacecrafts';
import starMap from './screens/starMap';

export default function App() {
  const main = createStackNavigator();
  return (
    <NavigationContainer>
      <main.Navigator headerMode="none">
        <main.Screen name={"HOME"} component={homeScreen} options={option} />
        <main.Screen name={"DAILY PICKS"} component={dailyPick} options={option} />
        <main.Screen name={"SPACECRAFTS"} component={spacecrafts} options={option} />
        <main.Screen name={"STAR MAP"} component={starMap} options={option} />
      </main.Navigator>
    </NavigationContainer>
  );
}

var option = {
  headerStyle: {
    backgroundColor: "#212121",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  headerTintColor: "#fff",
};