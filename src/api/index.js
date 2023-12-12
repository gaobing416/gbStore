// 
import axios from '../untils/request.js'
// 登录
export const login = (data)=>{
    return axios({
        url:'/role',
        method:'get',
        data
    })
}
// 获取路径
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
// 根据id删除数据
export const delTabValSelect = (ids)=>{
    return axios({
        url:`/list?${ids.id}&${ids.id1}`,
        method:'delete',
    })
}
// 根据id编辑数据
export const editTabVal = (id,data)=>{
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
// h获取ONE charts数据
export const getChartOne = ()=>{
    return axios({
        url:`/chartOne`,
        method:'get',
    })
}
// h获取two charts数据
export const getChartTwo = ()=>{
    return axios({
        url:`/chartTwo`,
        method:'get',
    })
}
// h获取three charts数据
export const getChartThree = ()=>{
    return axios({
        url:`/chartThree`,
        method:'get',
    })
}
// h获取four charts数据
export const getChartFour = ()=>{
    return axios({
        url:`/chartFour`,
        method:'get',
    })
}