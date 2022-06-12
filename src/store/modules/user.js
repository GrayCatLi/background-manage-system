import md5 from 'MD5'
import { login } from '@/api/sys'

export default {
  namespaced: true,
  state: () => {},
  mutations: {},
  actions: {
    // 登录请求动作
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
