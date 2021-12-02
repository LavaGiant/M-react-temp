import { createElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GuardedRoute } from 'react-router-guards'

export const renderRoutes = (routes, auth = false, extraProps = {}, switchProps = {}) => routes ?
  createElement(Switch, switchProps, routes.map((route, i) => createElement(auth ? GuardedRoute : Route, {
    ...route,
    component: null,
    children: null,
    key: route.key || i,
    render: props => route.render ?
      route.render(Object.assign({}, props, {}, extraProps, { route }))
      :
      createElement(route.component, Object.assign({}, props, extraProps, { route }))
  })
  )) : null;
