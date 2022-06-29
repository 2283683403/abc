import request from '../utils/request'

// 登录
const login = (data) => {
  return request({ url: '/sys/login', method: 'post', data })
}

export default {
  login
}
