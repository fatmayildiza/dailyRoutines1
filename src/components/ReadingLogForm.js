// src/components/ReadingLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveReadingAsync } from '../redux/thunks'; // Redux Thunk'u kullanarak sayfa sayılarını kaydetme işlemi

const ReadingLogForm = () => {
  const dispatch = useDispatch();
  const [pagesRead, setPagesRead] = useState('');

  const handleSavePagesRead = () => {
    dispatch(saveReadingAsync(pagesRead)); // Redux Thunk'u kullanarak sayfa sayılarını kaydediyoruz
    setPagesRead('');
  };

  return (
    <View>
      <Text style={{fontSize:22,fontWeight:'bold'}}>My Daily Readings </Text>
      <TextInput
        placeholder="Enter pages read"
        value={pagesRead}
        onChangeText={setPagesRead}
      />
      <Button title="Save Pages Read" onPress={handleSavePagesRead} />
    </View>
  );
};

export default ReadingLogForm;
