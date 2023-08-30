// src/navigation/MainNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WeeklyExerciseList from '../components/WeeklyExerciseList';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WeeklyExerciseList">
      <Stack.Screen name="WeeklyExerciseList" component={WeeklyExerciseList} />
      <Stack.Screen name="ExerciseDetails" component={ExerciseDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
