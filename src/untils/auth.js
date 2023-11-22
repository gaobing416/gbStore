// 存
export const setToken = (token)=>{
    return sessionStorage.setItem('token',token)
}
// 取
export const getToken = (token)=>{
    return sessionStorage.getItem('token')
}
// 删
export const removeToken = (token)=>{
    return sessionStorage.removeItem('token')
}