import React from 'react'
import { StyledCard } from './styles/Card.styled'

type CardProps = {
    children: React.ReactNode
  }

const Card = ({children}: CardProps) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card


