import { configureStore } from '@reduxjs/toolkit';
import users from './users/users';
import todos from './Todos/todos';

const store = configureStore({
  reducer: {
    users : users,
    todos : todos
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
