<template>
    <div> 
        <el-menu-item :index="navItems.path" v-if="!navItems.child">
            <el-icon><component :is="navItems.icon"></component></el-icon>
            <template #title>
                <span>{{ navItems.title }}</span>
            </template>
        </el-menu-item>
        
        <el-sub-menu :index="navItems.path" v-else >
            <el-icon></el-icon>
            <template #title>
                <span>{{ navItems.title }}</span>
            </template>
            <NavItem v-for="item in navItems.child" :key="item.path" :navItems="item"></NavItem>
        </el-sub-menu>

    </div>
</template>
<script setup>
import { HomeFilled } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
const { navItems } = defineProps({
    navItems: {
        type: Object
    }
})
</script>
<style scoped>
.el-sub-menu__title{

}
:root{
    --el-menu-icon-width: 0px;
}
</style>