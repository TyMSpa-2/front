import React from 'react'

// User interface with required properties
interface User {
  name: string;
  age: number;
  genre: string;
}

// Props interface with required users property
interface Props {
  users: User[];
}

// Function component UserCards with props of type Props
const DumbComponent: React.FC<Props> = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div className='user' key={user.name}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Genre: {user.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default DumbComponent
