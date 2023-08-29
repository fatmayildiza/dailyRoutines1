import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'; 
import store from './src/redux/store'; 
import DailyLogForm from './src/components/DailyLogForm';
import ReadingLogForm from './src/components/ReadingLogForm';
import ExerciseLogForm from './src/components/ExerciseLogForm';

const App = () => {
  return (
    // Redux Provider ile Redux store'u sarmalayın
    <Provider store={store}>
      <View style={styles.container}>
        <DailyLogForm />
        <ReadingLogForm />
        <ExerciseLogForm />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;
