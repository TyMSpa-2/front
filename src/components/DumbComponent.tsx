import React from 'react'
import { User } from '../typings/index'

// User interface with required properties

// Props interface with required users property
interface Props {
  users: User[]
}

// Function component UserCards with props of type Props
const DumbComponent: React.FC<Props> = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div className="user" key={user.name}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
        </div>
      ))}
    </div>
  )
}

export default DumbComponent
