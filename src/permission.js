import router from './router'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // 获取token
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
