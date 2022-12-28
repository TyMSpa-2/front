import React from 'react'
import DumbComponent from '../../components/DumbComponent'
import { useSelector } from 'react-redux'
import { User } from '../../typings/index'

type RootState = {
  users: User[]
}

const TestPage = () => {
  const users = useSelector((state: RootState) => state.users)

  return <DumbComponent users={users} />
}

export default TestPage
