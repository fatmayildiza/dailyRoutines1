// src/components/ReadingLogForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ReadingLogForm = () => {
  const [pagesRead, setPagesRead] = useState('');

  const handleSavePagesRead = () => {
    // Burada Redux Thunk'u kullanarak veriyi kaydedebilirsiniz
    // Örnek olarak dispatch(saveReadingAsync(pagesRead));
    setPagesRead('');
  };

  return (
    <View>
      <Text>Reading Log</Text>
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
