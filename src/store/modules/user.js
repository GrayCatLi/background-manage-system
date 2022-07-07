import md5 from 'MD5'
import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storeage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '../../utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem() || '',
    userInfo: {}
  }),
  mutations: {
    // 将 token 缓存至本地及 vuex 中
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
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
            this.commit('user/setToken', data.token)
            router.push('/')
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    // 获取用户信息
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },

    // 登录退出动作
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
