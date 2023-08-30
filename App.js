// src/App.js
import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import DailyLogForm from './src/components/DailyLogForm';
import ReadingLogForm from './src/components/ReadingLogForm';
import ExerciseLogForm from './src/components/ExerciseLogForm';
import WeeklyReadingList from './src/components/WeeklyReadingList';
import WeeklyMealList from './src/components/WeeklyMealList';
import WeeklyExerciseList from './src/components/WeeklyExerciseList';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>My App</Text>
          </View>
          <View style={styles.content}>
            <DailyLogForm />
            <ReadingLogForm/>
            <ExerciseLogForm/>
            <WeeklyReadingList />
            <WeeklyMealList />
            <WeeklyExerciseList />
          </View>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default App;
