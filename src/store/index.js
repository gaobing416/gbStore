import {defineStore} from 'pinia'
import {ref} from 'vue'

export  const useRouterStore = defineStore('nav',()=>{
    //ref包装定义就是 state 
    const navData =ref([])
    const setNav =(value)=>{
        navData.value = value
    }
    return {
        navData,
        setNav
    }
})
