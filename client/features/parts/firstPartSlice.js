import { createSlice } from '@reduxjs/toolkit';

export const firstPartSlice = createSlice({
  name: 'testingThis',
  initialState: {
    // some value
  },
  reducers: {
    // some action
    // another action
    // ect
  }
});

export default firstPartSlice.reducer;

// export const { put in here the different reducers } = firstPartSlice.actions;