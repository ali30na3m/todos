import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todosInfo {
    id: string
    title: string
    isComplete: boolean
}

export interface UserInfo {
    id: string
    username: string | null
    email: string | null
    password: string | null
    todos : todosInfo[]
}

const initialState : UserInfo[] = []

const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        register: (state: UserInfo[], action: PayloadAction<UserInfo>) => {
            state.push(action.payload)
        }
    }
})

export default RegisterSlice.reducer
export const { register } = RegisterSlice.actions