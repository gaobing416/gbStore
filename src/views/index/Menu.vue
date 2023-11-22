<template>
    <div>
        <el-aside width="200px">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                @close="handleClose" router>
                <el-menu-item v-for="data in navItems" :key="data.path" :index="data.path">
                    <el-icon><Location/></el-icon>
                    <span></span>
                    <template #title>{{ data.title }}</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getNav } from '../../api'
import {getToken} from '../../untils/auth'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
// import { da } from 'element-plus/es/locale';
const navItems = ref([])//导航数据
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
    //   console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    //   console.log(key, keyPath)
}

onMounted(async () => {
    var id = getToken()
    let res = await getNav(id);
    console.log(res.data.res)
    navItems.value = res.data.res
})
</script>
<style  scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
