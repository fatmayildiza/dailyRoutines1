// src/components/WeeklyExerciseList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';

const WeeklyExerciseList = ({ weeklyExercises, navigation }) => {
  const handleExercisePress = (exerciseDetails) => {
    navigation.navigate('ExerciseDetails', { exerciseDetails });
  };

  return (
    <View>
      <Text>Weekly Exercise List</Text>
      <FlatList
        data={weeklyExercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleExercisePress(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  weeklyExercises: state.weeklyExercises,
});

export default connect(mapStateToProps)(WeeklyExerciseList);

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',

  },
})
