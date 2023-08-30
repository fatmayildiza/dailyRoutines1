// src/App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import DailyLogForm from './src/components/DailyLogForm';
import WeeklyReadingList from './src/components/WeeklyReadingList';
import WeeklyMealList from './src/components/WeeklyMealList';
import MainNavigator from './src/navigation/MainNavigator'; 

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <DailyLogForm />
          <WeeklyReadingList />
          <WeeklyMealList />
          <MainNavigator /> 
        </View>
      </NavigationContainer>
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
