import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import todos from './Todos/todos';
import register from './registerSlice/registerSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos : todos,
    register
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;