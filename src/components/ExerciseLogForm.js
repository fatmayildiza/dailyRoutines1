// src/components/ExerciseLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveExerciseAsync } from '../redux/thunks'; // Örnek bir async işlemi olduğunu varsayalım

const ExerciseLogForm = () => {
  const dispatch = useDispatch();
  const [exerciseDuration, setExerciseDuration] = useState('');

  const handleSaveExercise = () => {
    dispatch(saveExerciseAsync(exerciseDuration)); // Egzersiz süresini kaydetmek için Redux Thunk'u kullanıyoruz
    setExerciseDuration('');
  };

  return (
    <View>
      <Text style={{fontSize:22,fontWeight:'bold'}}> My Daily Sport Activity</Text>
      <TextInput
        placeholder="Enter exercise duration"
        value={exerciseDuration}
        onChangeText={setExerciseDuration}
      />
      <Button title="Save Exercise" onPress={handleSaveExercise} />
    </View>
  );
};

export default ExerciseLogForm;
