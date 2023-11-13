import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

// const defaultState = 

const userSlice = createSlice({
  name: 'user',
  initialState: {
    skinType: '',
    skinConditions: [],
    allergies: []
  },
  reducers: {
    // may have to add dot notation if it becomes an object
    makeUser: (state, action) => {
      state.skinType = action.payload;
      state.skinConditions = [...action.payload];
      state.allergies = [...action.allergies];
    }
  }
})

export const { makeUser } = userSlice.actions;

export default userSlice.reducer;


