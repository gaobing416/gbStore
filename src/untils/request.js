import axios from 'axios'
import {getToken} from './auth'
// 封装接口
const service = axios.create({
    baseURL:'http://localhost:3000'
})
//请求拦截器
service.interceptors.request.use(config=>{
    // 头部携带token
    config.headers['token'] = getToken()
    return config
})
// 响应拦截器
service.interceptors.response.use(res=>{
    // 头部携带token
    return res
},err=>{
    return Promise.reject(err)
})

export default service