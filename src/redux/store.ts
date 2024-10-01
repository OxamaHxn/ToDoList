import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
