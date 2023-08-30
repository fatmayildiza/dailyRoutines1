// src/components/WeeklyMealList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const WeeklyMealList = ({ weeklyMeals }) => {
  return (
    <View>
      <Text>Weekly Meals List</Text>
      
      <FlatList
        data={weeklyMeals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      
    </View>
  );
};

const mapStateToProps = (state) => ({
  weeklyMeals: state.weeklyMeals,
});

export default connect(mapStateToProps)(WeeklyMealList);
