import router from './router'
import store from './store'
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = localStorage.getItem('token')
  // 获取用户信息
  const userInfo = store.getters.userInfo
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (userInfo) {
        next()
      } else {
        next()
        // 调用获取信息接口
        // const response = await store.dispatch('user/getUserInfo')
        // if (response) {
        //   next()
        // } else {
        //   // next('/login')
        //   // alert('1')
        //   console.log(response)
        // }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
