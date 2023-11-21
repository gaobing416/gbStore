import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/index/Home.vue'
import Login from '../views/login/Login.vue'


const routes = [
    {
        //重定向
        path:'/',
        redirect:'/login'
    },
    {   
        path:'/login',
        name:'login',
        component:Login
        // component:()=>import('../) 按需导入
    },
    {   
        path:'/home',
        name:'home',
        component:Home
    },
    
]
const router = new createRouter({
    history:createWebHashHistory(),
    routes
})
export default router