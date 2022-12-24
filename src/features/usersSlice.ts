import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { User } from '../typings/index'
import users from '../../utils/users'

const initialState: User[] = users

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.unshift(action.payload)
      console.log('users', current(state) )
    },
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer
