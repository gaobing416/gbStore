<template>
    <div class="module">
        <el-container>
                <!-- 左侧导航 -->
                <Menu></Menu>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <!-- 头部-->
                    <el-button @click="goback">退出</el-button>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import Menu from './Menu.vue'
import {useRouter} from 'vue-router'
import {removeToken} from '../../untils/auth'
import { useRouterStore } from '../../store'
const router= useRouter()
// 退出
const goback = ()=>{
    // useRouterStore().navData = ""
    router.push('/login')
    removeToken()
}
</script>
<style scoped>
/* .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
} */
</style>