import { configureStore } from '@reduxjs/toolkit';
import firstPartSlice from './features/parts/firstPartSlice';

export default configureStore({
  reducer: {},
    firstPart: firstPartSlice
});