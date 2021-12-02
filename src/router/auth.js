export const requireLogin = (to, from, next) => {
  const isLogin = false
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