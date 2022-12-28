import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render as renderRTL, RenderResult, fireEvent } from '@testing-library/react'
import DumbComponent from '../components/DumbComponent'
import '@testing-library/jest-dom'
import store from '../app/store'

// Custom render function to wrap rendered components with the Redux Provider
const render = (component: ReactElement) =>
  renderRTL.call(render, <Provider store={store}>{component}</Provider>) as RenderResult

// Test to render component
test('renders the component', () => {
  const { container } = render(<DumbComponent />)
  expect(container).toBeInTheDocument()
})

// Test to check the number of cards rendered
test('renders the correct number of cards', () => {
  const state = store.getState()
  const users = state.users
  const { container } = render(<DumbComponent />)
  const cards = container.querySelectorAll('.user')
  expect(cards.length).toBe(users.length)
})

// Test to check if the correct text is rendered in each card
test('renders the correct text for each card', () => {
  const state = store.getState()
  const users = state.users
  const { getAllByText } = render(<DumbComponent />)

  users.forEach((user) => {
    const nameElement = getAllByText(`Name: ${user.name}`)
    nameElement.forEach((element) => expect(element).toBeInTheDocument())

    const ageElement = getAllByText(`Age: ${user.age}`)
    ageElement.forEach((element) => expect(element).toBeInTheDocument())

    const genderElement = getAllByText(`Gender: ${user.gender}`)
    genderElement.forEach((element) => expect(element).toBeInTheDocument())
  })
})

// Test if Redux implementation is working correctly
test('adds a new user to the store when the form is submitted', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <DumbComponent />
    </Provider>,
  )

  const nameInput = getByPlaceholderText('name')
  const ageInput = getByPlaceholderText('age')
  const genderInput = getByPlaceholderText('gender')
  const submitButton = getByText('Add new user')

  fireEvent.change(nameInput, { target: { value: 'John' } })
  fireEvent.change(ageInput, { target: { value: '30' } })
  fireEvent.change(genderInput, { target: { value: 'male' } })
  fireEvent.click(submitButton)

  const userDiv = getByText('Name: John')
  expect(userDiv).toBeInTheDocument()
  expect(store.getState().users).toHaveLength(11)
})
