import React, { useState } from 'react'
import { User } from '../typings/index'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../features/usersSlice'
import { v4 as newID } from 'uuid'

// Props interface with required users property
interface Props {
  users?: User[]
}
interface RootState {
  users: User[]
}

const initialUser: User = { name: '', age: 0, gender: '', id: '' }

const DumbComponent: React.FC<Props> = (props) => {
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
      {(props.users ? props.users : storeUsers).map((user) => {
        return (
          <div
            key={user.id}
            className="user"
            style={{
              display: 'flex',
              paddingLeft: '.5rem',
              width: 'fit-content',
              flexWrap: 'wrap',
              gap: '1rem',
              backgroundColor: user.gender === 'male' ? '#d4faff' : '#f6d7ff',
              marginBottom: '.5rem',
            }}>
            <p id="name">Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <br />
          </div>
        )
      })}
    </>
  )
}

export default DumbComponent
