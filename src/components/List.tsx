import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../typings'

interface Props {
  items: User[]
}

export const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)
