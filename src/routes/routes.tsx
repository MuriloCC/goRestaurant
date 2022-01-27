import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Requests from '../screens/Requests';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes () {
  return (
    <Navigator initialRouteName="Listagem" >
      <Screen name='Listagem' component={Home} />
      <Screen name='Pedidos' component={Requests} />
      <Screen name='Favoritos' component={Favorites} />
    </Navigator>
  );
}