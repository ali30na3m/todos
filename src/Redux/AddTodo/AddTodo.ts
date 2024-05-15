import { createSlice } from '@reduxjs/toolkit';

type userInfos = {
  id: string 
  title : string
  isComplete : boolean
}

const todo = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    
  }
})

export default todo.reducer 