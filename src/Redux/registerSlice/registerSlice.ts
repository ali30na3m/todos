import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
    id: string
    username: string | null
    email: string | null
    password: string | null
}

const RegisterSlice = createSlice({
    name: 'register',
    initialState: [],
    reducers: {
        register: (state: UserInfo[], action: PayloadAction<UserInfo>) => {
            state.push(action.payload)
        }
    }
})

export default RegisterSlice.reducer
export const { register } = RegisterSlice.actions