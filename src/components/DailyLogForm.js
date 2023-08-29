// src/components/DailyLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveMealAsync } from '../redux/thunks';

const DailyLogForm = () => {
  const dispatch = useDispatch();
  const [meal, setMeal] = useState('');

  const handleSaveMeal = () => {
    dispatch(saveMealAsync(meal));
    setMeal('');
  };

  return (
    <View>
      <Text>Daily Log</Text>
      <TextInput
        placeholder="Enter your meal"
        value={meal}
        onChangeText={setMeal}
      />
      <Button title="Save Meal" onPress={handleSaveMeal} />
    </View>
  );
};

export default DailyLogForm;
