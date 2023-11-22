import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index/Home.vue'
import Login from '../views/login/Login.vue'
import { useRouterStore } from '../store/index'
import { getNav } from '../api/index'
import {getToken} from '../untils/auth'
// import { id } from 'element-plus/es/locale'

const routes = [
    {
        //重定向
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
        // component:()=>import('../) 按需导入
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children:[
        // {
        //     path:'/index',
        //     name:'index',
        //     component:()=>import('../views/index/componnets/index/index.vue')
        // },
        // {
        //     path:'/census',
        //     name:'census',
        //     component:()=>import('../views/index/componnets/census/index.vue')
        // }
        ]
    },

]
const router = new createRouter({
    history: createWebHistory(),
    routes
})

// 路由拦截

router.beforeEach(async (to, from, next) => {
    if (to.path === './login') {
        next()
    } else {
        if (useRouterStore() && useRouterStore().navData.length == 0) {
            var id = 1
            let res = await getNav(id)
            // 数据缓存
            useRouterStore().setNav(res.data.res)
            // 转换数据类型
            const navData = fn(res.data.res)
            // 动态路由添加
            router.addRoute(navData)
            next({
                path:to.path
            })
        }else{
            next()
        }
    }
    // 发送请求

})
// 转换数据类型
const fn = (res) => {
    let homeRoutes = routes.filter(item => item.path == '/home')[0]
    homeRoutes.children=[]
    res.forEach(item => {
        homeRoutes.children.push({
            path: item.path,
            name: item.name,
            component: () => import(`../views/index/componnets/${item.components}/index.vue`)
        })
    });
    return homeRoutes
}
export default router