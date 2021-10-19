import { Suspense, memo, Fragment, FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GuardProvider } from 'react-router-guards';

import { GlobalSkeleton } from '@/components'
import { renderRoutes } from '@/utils'

import mainRoutes from './mainRoutes'
import { requireLogin } from './auth'

interface Props {
  loginAuth: boolean
}

const Router: FC<Props> = memo(({ loginAuth = false }) => {
  const routerWrapper:JSX.Element = <Suspense fallback={<GlobalSkeleton />}>{renderRoutes(mainRoutes, loginAuth)}</Suspense>
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
