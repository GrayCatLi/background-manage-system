// 快捷访问
import variables from '@/styles/variables.module.scss'

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: state => variables
}

export default getters
