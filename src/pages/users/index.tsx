import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../../typings/index'
import { sampleUserData } from '../../../utils/sample-data'
import Layout from '../../components/Layout'
import { addUser } from '../../features/usersSlice'
import { v4 as newID } from 'uuid'

type Props = {
  items: User[]
}

type RootState = {
  users: User[]
}

const initialUser: User = { name: '', age: 0, gender: '', id: '' }

const WithStaticProps = ({ items }: Props) => {
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState<User>(initialUser)
  const users = useSelector((state: RootState) => state.users)
  return (
    <Layout title="Users List">
      <h1>Users List</h1>
      <p>You are currently on: /users</p>
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
          value={newUser.age}
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
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              display: 'flex',
              paddingLeft: '.5rem',
              width: 'fit-content',
              flexWrap: 'wrap',
              gap: '1rem',
              backgroundColor: '#c5fbff',
              marginBottom: '.5rem',
            }}>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Age:</b> {user.age}
            </p>
            <p>
              <b>Gender:</b> {user.gender}
            </p>
            <br />
          </div>
        )
      })}
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
