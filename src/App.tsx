import { memo, FC, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from '@/store'

import GlobalSkeleton from '@/components/global-skeleton'

const App: FC = memo(() => (
  <Provider store={store}>
    <BrowserRouter>
    <Suspense fallback={<GlobalSkeleton />}>
      {renderRoutes(routes)}
    </Suspense>
  </BrowserRouter>
  </Provider>
))

export default App
