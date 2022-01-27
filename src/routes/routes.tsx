import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Requests from '../screens/Requests';
import Favorites from '../screens/Favorites';
import { theme } from '../global/styles';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();


export function Routes () {
  return (
    <Navigator 
      initialRouteName="Listagem"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffff',
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 16,
          height: 56, 
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.lightGray,
        tabBarIconStyle: {
          position: 'relative'
        }
      }} 
    >
      <Screen 
        name='Listagem' 
        component={Home}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={18} color={color} />
          )
        }}
      />
      <Screen 
        name='Pedidos' 
        component={Requests}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={18} color={color} />
          )
        }}
      />
      <Screen 
        name='Favoritos' 
        component={Favorites}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={18} color={color} />
          )
        }} 
      />
    </Navigator>
  );
}