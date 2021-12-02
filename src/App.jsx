import { memo } from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import Counter from '@/pages/counter'

const App = memo(() => (
  <Provider store={store}>
    <Counter />
  </Provider>
))

export default App
