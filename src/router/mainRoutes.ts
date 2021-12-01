import { createElement, FC, lazy, LazyExoticComponent } from 'react'
import { Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('@/pages/404'))
const HelloWorld = lazy(() => import('@/pages/hello-world'))
const Counter = lazy(() => import('@/pages/counter'))

export interface RouteItem {
  key?: string | number
  path: string
  component?: LazyExoticComponent<FC>
  exact?: boolean
  strict?: boolean
  children?: RouteItem[]
  meta?: {
    auth?: boolean
    [key: string]: any
  }
  render?: (...r: any) => JSX.Element
}


const routes: RouteItem[] = [
  {
    path: '/',
    exact: true,
    render: () => (
      createElement(Redirect, {
        to: "/hello"
      })
    )
  },
  {
    path: '/hello',
    component: HelloWorld
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes
