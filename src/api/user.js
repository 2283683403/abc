import request from '../utils/request'

// 登录
const login = (data) => {
  return request({ url: '/sys/login', method: 'post', data })
}
// 获取用户信息
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

export default {
  login,
  getUserInfo
}
