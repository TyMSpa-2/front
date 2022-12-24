import { Provider } from 'react-redux'
import store from '../app/store'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}

export default App
