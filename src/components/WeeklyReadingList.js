// src/components/WeeklyReadingList.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const WeeklyReadingList = ({ weeklyReadings }) => {
  return (
    <View>
      <Text style={{fontSize:22,fontWeight:'bold'}}>What i read this week? </Text>
      <FlatList
        data={weeklyReadings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  weeklyReadings: state.weeklyReading,
});

export default connect(mapStateToProps)(WeeklyReadingList);
