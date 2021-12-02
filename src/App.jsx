import { memo } from 'react'
import { Provider } from 'react-redux'

import Router from '@/router'
import store from '@/store'

const App = memo(() => (
  <Provider store={store}>
    <Router />
  </Provider>
))

export default App
