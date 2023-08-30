// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToWeeklyMeals = () => {
    navigation.navigate('WeeklyMeals'); // WeeklyMealsScreen'a git
  };

  return (
    <View style={styles.container}>
      <Text>Ana Sayfa</Text>
      <Button title="Haftalık Yemekler" onPress={navigateToWeeklyMeals} />
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
