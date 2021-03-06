import { RouteItem } from '@/router/mainRoutes';
import { createElement } from 'react';
import { Switch, Route } from 'react-router';
import { GuardedRoute } from 'react-router-guards'

export const renderRoutes = (routes: RouteItem[], auth = false, extraProps = {}, switchProps = {}) => routes ?
  createElement(Switch, switchProps, routes.map((route, i): JSX.Element => createElement(auth ? GuardedRoute : Route, {
      ...route,
      key: route.key || i,
      component: undefined,
      children: null,
      render: props => route.render ?
        route.render(Object.assign({}, props, {}, extraProps, { route }))
        :
        createElement(route.component as any, Object.assign({}, props, extraProps, { route }))
    })
  )) : null;
