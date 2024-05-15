import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  username: string;
  password: string;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [{ id: 1, username: "ali30na", password: 'sina1234' }],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
