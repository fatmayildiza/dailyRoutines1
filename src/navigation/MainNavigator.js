// src/navigation/MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WeeklyMealsScreen from '../components/WeeklyMealList';


const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
      {/* Diğer ekranlar */}
      <Stack.Screen name="WeeklyMeals" component={WeeklyMealsScreen} options={{ title: 'Haftalık Yemekler' }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
