// src/screens/ExerciseDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ExerciseDetailsScreen = ({ route }) => {
  const { exerciseDetails } = route.params;

  return (
    <View>
      <Text>Exercise Details</Text>
      <Text>{exerciseDetails}</Text>
    </View>
  );
};

export default ExerciseDetailsScreen;
