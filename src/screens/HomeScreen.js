// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToWeeklyMeals = () => {
    navigation.navigate('WeeklyMeals'); 
  };

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title=" My Weekly Meals" onPress={navigateToWeeklyMeals} />
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

export default HomeScreen;
