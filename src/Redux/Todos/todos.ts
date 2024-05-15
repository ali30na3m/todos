import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoInfo = {
  id: string;
  title: string;
  isComplete: boolean;
};

const todos = createSlice({
  name: 'todos',
  initialState: [] as TodoInfo[],
  reducers: {
    addTodo: {
      reducer: (state : TodoInfo[], action: PayloadAction<TodoInfo>) => {
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
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export default todos.reducer;
export const { addTodo, removeTodo } = todos.actions;
