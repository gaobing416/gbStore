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
// 获取表数据
export const getTableList = (data)=>{
    return axios({
        url:`/list`,
        method:'get',
        data
    })
}
// 根据id删除数据
export const delTabVal = (id)=>{
    return axios({
        url:`/list/${id}`,
        method:'delete',
    })
}
// 根据id编辑数据
export const editTabVal = (id)=>{
    return axios({
        url:`/list/${id}`,
        method:'patch',
        data
    })
}
// 获取作者
export const getAuthor = ()=>{
    return axios({
        url:`/author`,
        method:'get',
        
    })
}
// 添加数据
export const addData = (data)=>{
    return axios({
        url:`/list`,
        method:'post',
        data
    })
}
// 分页
export const pageCut = (currentPage)=>{
    return axios({
        url:`/list?_page=${currentPage}&_limit=5`,
        method:'get',
    })
}