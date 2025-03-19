import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartingScreen from './StartingScreen';
import RegistracijaPage from './RegistracijaPage';
import MainPage from './MainPage';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
     <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='StartingScreen'>
        <Stack.Screen
        name='StartingScreen'
        component={StartingScreen}
        options={{headerShown: false}}
         />
         <Stack.Screen
         name='RegistracijaPage'
         component={RegistracijaPage}
         options={{headerShown: false}}
          />
          <Stack.Screen
         name='MainPage'
         component={MainPage}
         options={{headerShown: false}}
          />
      </Stack.Navigator>
     </NavigationContainer>
  );
}
