<template>
    <div class="module">
        <el-container>
            <!-- 左侧导航 -->
            <Menu></Menu>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <!-- 面包屑   监听路由变化-->
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{path:`${data.path}`}" v-for="data in brList" :key="data.meta">{{ data.meta.title }}</el-breadcrumb-item>
                        </el-breadcrumb>
                    <el-button @click="goback">退出</el-button>
                </el-header>
                <el-main>
                    首页
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref, defineExpose ,onMounted, watch} from 'vue'
import { } from '@element-plus/icons-vue'
import Menu from './Menu.vue'
import { useRouter ,useRoute} from 'vue-router'
import { removeToken } from '../../untils/auth'
import { useRouterStore } from '../../store'
import {getToken} from '../../untils/auth'
const route = useRoute()
const router = useRouter()
const brList = ref([])
const token = getToken()
// 退出
console.log(token)
const goback = () => {
    useRouterStore().navData = ""
    router.push('/login')
    removeToken()
}
// 监听路由变化
watch(route,(to,from)=>{
    getBreadChange(to.matched)
})
const getBreadChange = (matched)=>{
    brList.value = matched
}
onMounted(()=>{
   console.log(route.matched) 
   getBreadChange(route.matched)
})
</script>
<style scoped>
.el-header {
    border-bottom: solid 1px var(--el-menu-border-color);
}
body {
    background: url('../../../../../assets/1.jpg') top center no-repeat;
}
* {
    margin: 0 ;
    padding: 0;
}
.el-main {
    border: solid 1px var(--el-menu-border-color);
 
}
</style>