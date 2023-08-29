// src/redux/actions.js
import { ADD_MEAL, ADD_READING, ADD_EXERCISE } from './types';

export const addMeal = (mealData) => ({
  type: ADD_MEAL,
  payload: mealData,
});

export const addReading = (readingData) => ({
  type: ADD_READING,
  payload: readingData,
});

export const addExercise = (exerciseData) => ({
  type: ADD_EXERCISE,
  payload: exerciseData,
});
