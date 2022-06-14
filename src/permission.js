import router from '@/router'
import store from '@/store'

// 白名单 (用户未登录也可访问的页面)
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 1. 用户登录前，只能访问 login 页面
  // 2. 用户登录后，不能访问 login 页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
