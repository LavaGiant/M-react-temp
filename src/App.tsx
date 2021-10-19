import { memo, FC } from 'react'
import { Provider } from 'react-redux'

import store from '@/store'

import Router from '@/router'

const App: FC = memo(() => (
  <Provider store={store}>
    <Router loginAuth={false} />
  </Provider>
))

export default App
