import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './components/OnlineShoppingScreen';
import AddToCartScreen from './components/AddToCartScreen';
import PaymentSuccessfulScreen from './components/PaymentSuccessfulScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <OnlineShoppingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:70
  },
});
