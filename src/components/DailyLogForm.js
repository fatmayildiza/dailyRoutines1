// src/components/DailyLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet } from 'react-native';
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
      <Text style={{fontSize:22,fontWeight:'bold'}}> What Food Did I Cook Today?</Text>
      <TextInput
      style={StyleSheet.input}
        placeholder="Enter your meal"
        value={meal}
        onChangeText={setMeal}
      />
      <Button title="Save Meal" onPress={handleSaveMeal} />
    </View>
  );
};

export default DailyLogForm;

const styles = StyleSheet.create({
  input: {
    borderRadius:11,
    backgroundColor:'green',

  },
})