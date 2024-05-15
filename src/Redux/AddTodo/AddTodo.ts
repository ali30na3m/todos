import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  todo: string;
  isComplete: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const actionTodoSlice = createSlice({
  name: "todo/action",
  initialState,
  reducers: {
    addTodoAct: {
      reducer: (todos: TodoState, action: PayloadAction<Todo>) => {
        todos.push(action.payload);
      },
      prepare: (title: string) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            todo: title,
            isComplete: false
          }
        }
      }
    },
    removeTodoAct: (todos: TodoState, action: PayloadAction<string>) => {
      return todos.filter(item => item.id !== action.payload);
    }
  }
});

export default actionTodoSlice.reducer;
export const { addTodoAct, removeTodoAct } = actionTodoSlice.actions