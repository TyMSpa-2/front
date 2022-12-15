import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DumbComponent from '../components/DumbComponent'
import users from '../users'

// Test to render component
test('renders the component', () => {
  const { container } = render(<DumbComponent users={users} />)
  expect(container).toBeInTheDocument()
})

// Test to check the number of cards rendered
test('renders the correct number of cards', () => {
  const { container } = render(<DumbComponent users={users} />)
  const cards = container.querySelectorAll('.user')
  expect(cards.length).toBe(users.length)
})

// Test to check if the correct text is rendered in each card
test('renders the correct text for each card', () => {
  const { getAllByText } = render(<DumbComponent users={users} />)

  users.forEach((user) => {
    const nameElement = getAllByText(user.name)
    nameElement.forEach((element) => expect(element).toBeInTheDocument())

    const ageElement = getAllByText(`Age: ${user.age}`)
    ageElement.forEach((element) => expect(element).toBeInTheDocument())

    const genreElement = getAllByText(`Genre: ${user.genre}`)
    genreElement.forEach((element) => expect(element).toBeInTheDocument())
  })
})
