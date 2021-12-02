import { memo, FC } from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import Counter from '@/pages/counter'

const App: FC = memo(() => (
  <Provider store={store}>
    <Counter />
  </Provider>
))

export default App
