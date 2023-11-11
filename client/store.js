import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

// when using user, call state.user.skinType /or/ skinConditions / or / ect;


const store = configureStore({
  reducer: {
    user: userSlice
  },
});

export default store;