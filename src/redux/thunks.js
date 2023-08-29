// src/redux/thunks.js
import { addMeal } from "./actions"; 

export const saveMealAsync = (mealData) => (dispatch) => {
  // Do some asynchronous operation, then...
  dispatch(addMeal(mealData));
};
