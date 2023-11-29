<template>
    <div>
        <el-aside width="200px">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收拢</el-radio-button>
            </el-radio-group>
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                @close="handleClose" router>

                <NavItem v-for="data in navItems" :key="data.path" :navItems="data">
                   
                </NavItem>
                
            </el-menu>
        </el-aside>
    </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from 'vue'
import NavItem from './NavItem.vue'
import { getNav } from '../../api'
import { getToken } from '../../untils/auth'
import { HomeFilled } from '@element-plus/icons-vue'
const navItems = ref([])//导航数据
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath)
}
const handleClick = () => {

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
