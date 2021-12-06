import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import AddToCartScreen from './src/screens/AddToCartScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';


const Stack = createStackNavigator()

export default function App({}) {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name = "OnlineShopping" component = {OnlineShoppingScreen}/>
       <Stack.Screen name ="AddToCart" component = {AddToCartScreen} />
       <Stack.Screen name = "PaymentSuccessful" component = {PaymentSuccessfulScreen}/>
     </Stack.Navigator>


   </NavigationContainer>
  )
}

