import { createElement, lazy } from 'react'
import { Redirect } from 'react-router-dom'

const NotFound = lazy(() => import('@/pages/404'))
const HelloWorld = lazy(() => import('@/pages/hello-world'))
const Counter = lazy(() => import('@/pages/counter'))

const mainRoutes = [
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

export default mainRoutes
