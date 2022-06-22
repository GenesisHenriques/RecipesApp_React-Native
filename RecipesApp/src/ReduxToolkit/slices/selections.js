import { createSlice } from "@reduxjs/toolkit";

export const selectionsSlice = createSlice({
  name: 'selections',
  initialState: {
    foodArray: null,
    drinkArray: null,
    areaFoodArray: null,
  },
  reducers: {
    foodArray: (state, action) => {
      state.foodArray = action.payload
    },
    drinkArray: (state, action) => {
      state.drinkArray = action.payload
    },
    areaFoodArray: (state, action) => {
      state.areaFoodArray = action.payload
    }
  }
})

export const { areaFoodArray, foodArray, drinkArray } = selectionsSlice.actions;
export default selectionsSlice.reducer;