import axios from 'axios'
// 封装接口
const service = axios.create({
    baseURL:''
})
//请求拦截器
service.interceptors.request.use(config=>{
    // 头部携带token
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