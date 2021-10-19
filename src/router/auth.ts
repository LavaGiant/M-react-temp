import { GuardFunction } from 'react-router-guards';
export const requireLogin: GuardFunction = (to, from, next) => {
  const isLogin: boolean = false
  if (to.meta.auth) {
    if (isLogin) {
      if (to.match.path === '/login') {
        next.redirect('/')
      } else {
        next();
      }
    } else {
      next.redirect('/login');
    }
  } else {
    next();
  }
};