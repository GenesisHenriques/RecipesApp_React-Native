import { createSlice } from "@reduxjs/toolkit";

export const selectionsSlice = createSlice({
  name: 'selections',
  initialState: {
    foodArray: null,
    drinkArray: null,
    testando: 'Genesis123'
  },
  reducers: {
    foodArray: (state, action) => {
      state.foodArray = action.payload
    },
    drinkArray: (state, action) => {
      state.drinkArray = action.payload
    }
  }
})

export const { drinkArray, foodArray } = selectionsSlice.actions;
export default selectionsSlice.reducer;