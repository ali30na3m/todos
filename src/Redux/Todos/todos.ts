import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoInfo = {
  id: string;
  title: string;
  isComplete: boolean;
};

const todos = createSlice({
  name: 'todos',
  initialState: [] as TodoInfo[],
  reducers: {
    addTodo: {
      reducer: (state: TodoInfo[], action: PayloadAction<TodoInfo>) => {
        state.push(action.payload);
      },
      prepare: (title: string) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            title: title,
            isComplete: false
          }
        };
      }
    },
    removeTodo: (state: TodoInfo[], action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    },
    doTodo: (state: TodoInfo[], action: PayloadAction<string>) => {
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    },
    getLocal: (state: TodoInfo[], action: PayloadAction<TodoInfo[]>) => {
      return [...state, ...action.payload];
    }
  }
});

export default todos.reducer;
export const { addTodo, removeTodo, doTodo, getLocal } = todos.actions;
