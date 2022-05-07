import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';
import Box from './Box';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Detalles"}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{title: "Menu"}}/>
        <Stack.Screen name="Box" component={Box} options={{title: "Box"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}