import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
interface Todo {
=======
interface UserInfo {
>>>>>>> working
  id: number;
  username: string;
  password: string;
}

<<<<<<< HEAD
interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [{ id: 1, username: "ali30na", password: 'sina1234' }],
};
=======
const initialState: UserInfo[] = [
  { id: 1, username: "ali30na", password: 'sina1234' }
]
>>>>>>> working

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
<<<<<<< HEAD
=======

>>>>>>> working
