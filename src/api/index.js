// 
import axios from '../untils/request.js'

export const login = (data)=>{
    return axios({
        url:'/role',
        method:'get',
        data
    })
}
export const getNav = (id)=>{
    return axios({
        url:`/nav/${id}`,
        method:'get',
    })
}