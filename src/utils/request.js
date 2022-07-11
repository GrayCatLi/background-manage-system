import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
// import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 添加 icode（调用接口必须）
  config.headers.icode = '18CD09FF17A78EE5'
  if (store.getters.token) {
    // if (isCheckTimeout) {
    //   // 登出操作
    //   store.dispatch('user/logout')
    //   return Promise.reject(new Error('token失效'))
    // }
    config.headers.Authorization = `Bear ${store.getters.token}`
  }
  // 必须返回 config
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  response => {
    const { success, message, data } = response.data
    // 判断响应是否成功
    if (success) {
      // 成功的话返回解析后的数据
      return data
    } else {
      // 失败（请求成功，业务失败：密码错误等情况），进行消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  error => {
    if (error.response && error.response.data && error.response.data.code === 401) {
      // token超时
      store.dispatch('user/logout')
    }
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
