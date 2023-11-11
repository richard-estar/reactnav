import React from 'react';
import ShoppingCartScreen from './components/Carrinho';
import MainScreen from './components/TelaPrincipal';
import CountrySelectionScreen from './components/Pais';
import CardScreen from './components/Card';
import Pais from './components/Pais';
import ProductCard from './components/Produto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'CardScreen'}>
          <Stack.Screen name={'CardScreen'} component={CardScreen} />
          <Stack.Screen name={'Pais'} component={Pais} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
