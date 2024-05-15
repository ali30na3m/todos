import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './TodoList/TodoList';
import actionTodoSlice from './AddTodo/AddTodo';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    actionTodoSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
