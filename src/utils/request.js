import axios from 'axios'
import loading from './loading'
import md5 from 'md5'
// 创造实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    // 打开loading
    loading.open()

    // 请求头
    const token = localStorage.getItem('token')
    config.headers.Authorization = token

    // 调用接口要传的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    return config
  },
  function (error) {
    // 对请求错误做些什么
    // 关闭loading
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 关闭loading加载
    loading.close()
    return response
  },
  function (error) {
    // 关闭loading加载
    loading.close()
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}
// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default request
