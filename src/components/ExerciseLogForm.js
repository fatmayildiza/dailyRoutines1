// src/components/ExerciseLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ExerciseLogForm = () => {
  const [exerciseDuration, setExerciseDuration] = useState('');

  const handleSaveExercise = () => {
    // Burada Redux Thunk'u kullanarak veriyi kaydedebilirsiniz
    // Örnek olarak dispatch(saveExerciseAsync(exerciseDuration));
    setExerciseDuration('');
  };

  return (
    <View>
      <Text>Exercise Log</Text>
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
