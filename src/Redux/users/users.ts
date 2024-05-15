import { createSlice } from '@reduxjs/toolkit';

interface UserInfo {
  id: number;
  username: string;
  password: string;
}

const initialState: UserInfo[] = [
  { id: 1, username: "ali30na", password: 'sina1234' }
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;

