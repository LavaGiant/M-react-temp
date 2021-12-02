import { Suspense, memo, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GuardProvider } from 'react-router-guards';

import { GlobalSkeleton } from '@/components'
import { renderRoutes } from '@/utils'

import mainRoutes from './mainRoutes'
import { requireLogin } from './auth'

const Router = memo(({ loginAuth = false }) => {
  const routerWrapper = <Suspense fallback={<GlobalSkeleton />}>{renderRoutes(mainRoutes, loginAuth)}</Suspense>
  return (
    <BrowserRouter>
      {
        loginAuth ?
          <GuardProvider guards={[requireLogin]}>{routerWrapper}</GuardProvider>
          :
          <Fragment>{routerWrapper}</Fragment>
      }
    </BrowserRouter>
  )
})
export default Router
