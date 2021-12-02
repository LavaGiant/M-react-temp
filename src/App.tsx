import { memo, FC } from 'react'

import Router from '@/router'

const App: FC = memo(() => (
  <Router loginAuth={false} />
))

export default App
