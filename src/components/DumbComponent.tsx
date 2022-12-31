import React, { useState } from 'react'
import { User } from '../typings/index'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../features/usersSlice'
import { v4 as newID } from 'uuid'
import Card from './Card'

// Props interface with required users property
interface DumbComponentProps {
  users?: User[]
}
interface RootState {
  users: User[]
}

const initialUser: User = { name: '', age: 0, gender: '', id: '' }

const DumbComponent = (props: DumbComponentProps) => {
  const [newUser, setNewUser] = useState<User>(initialUser)
  const storeUsers = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()
  return (
    <>
      <p>This is a test for Redux Toolkit</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addUser({ ...newUser, id: newID() }))
          setNewUser(initialUser)
        }}>
        <input
          required
          placeholder="name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <br />
        <input
          required
          placeholder="age"
          value={newUser.age > 0 ? newUser.age : ''}
          onChange={(e) => setNewUser({ ...newUser, age: parseInt(e.target.value) })}
        />
        <br />
        <input
          required
          placeholder="gender"
          value={newUser.gender}
          onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
        />
        <br />
        <button type="submit">Add new user</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(props.users ? props.users : storeUsers).map((user) => {
          return (
            <Card key={user.id}>
              <p id="name">Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Gender: {user.gender}</p>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default DumbComponent
