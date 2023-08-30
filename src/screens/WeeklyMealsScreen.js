// src/screens/WeeklyMealsScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeeklyMealList from '../components/WeeklyMealList';

const WeeklyMealsScreen = () => {
  return (
    <View style={styles.container}>
      <WeeklyMealList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeeklyMealsScreen;
