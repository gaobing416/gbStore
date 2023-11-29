<template>
    <el-drawer v-model="showDrawer" title="I am the title" direction="rtl" :before-close="handleClose">
        <div class="demo-drawer__content">
            <el-form :model="form" label-width="120px">
                    
            </el-form>
        </div>
    </el-drawer>
</template>
<script setup>
import { defineExpose, ref, reactive, onMounted } from 'vue'
import { getTableList, delTabVal, editTabVal, getAuthor } from '../../../../api'
const authorList = ref([])
const showDrawer = ref(false)
const form = reactive({
})
const onSubmit = () => {
    showDrawer.value = false
}
//抽屉关闭后
const handleClose = () => {
    showDrawer.value = false
}
const changeDra = () => {
    showDrawer.value = true
}
defineExpose({ changeDra })
onMounted(() => {
    getAuthor().then((res) => {
        authorList.value = res.data
        // console.log(authorList.value,res.data)
    })
})
</script>