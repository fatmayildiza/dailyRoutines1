import { addMeal, addExercise, addReading } from "./actions"; 

export const saveMealAsync = (mealData) => (dispatch) => {
  // Do some asynchronous operation, then...
  dispatch(addMeal(mealData));
};

export const saveExerciseAsync = (exerciseData) => (dispatch) => {
  // Do some asynchronous operation, then...
  dispatch(addExercise(exerciseData));
};

export const saveReadingAsync = (readingData) => (dispatch) => {
  // Do some asynchronous operation, then...
  dispatch(addReading(readingData));
};
