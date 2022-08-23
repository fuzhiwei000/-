import axios from 'axios'
import { getToken } from "./utils/setToken.js";
import { Message } from "element-ui";
const service = axios.create({
    baseURL: '/api',//baseURL会自动加在请求地址上
    timeout: 3000//请求时间，超过这个时间就会终止请求
})
// 添加请求拦截器
service.interceptors.request.use((config) => {
    console.log(config.headers)
    config.headers['token'] = getToken('token')
    // 每次请求的时候让存的token值挂在headers上以验证身份
    return config
}, (error) => {
    return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应的数据进行处理
    let { status, message } = response.data
    if (status !== 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response
}, (error) => {
    return Promise.reject(error)
})
export default service