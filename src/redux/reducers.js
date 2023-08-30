// src/redux/reducers.js
import { combineReducers } from 'redux'; // Make sure to import combineReducers
import { ADD_MEAL, ADD_READING, ADD_EXERCISE } from './types';

const mealsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

const readingsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_READING:
      return [...state, action.payload];
    default:
      return state;
  }
};

const exercisesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      return [...state, action.payload];
    default:
      return state;
  }
};


// Daha önceki reducer'ları buraya ekledikten sonra

const weeklyReadingReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_READING:
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  const weeklyMealsReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_MEAL:
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  const weeklyExercisesReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_EXERCISE:
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    meals: mealsReducer,
    readings: readingsReducer,
    exercises: exercisesReducer,
    weeklyReading: weeklyReadingReducer,
    weeklyMeals: weeklyMealsReducer,
    weeklyExercises: weeklyExercisesReducer,
  });
  
  export default rootReducer;
  




