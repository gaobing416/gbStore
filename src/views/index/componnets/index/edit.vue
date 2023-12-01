<template>
    <el-drawer v-model="showDrawer" title="I am the title" direction="rtl" :before-close="handleClose">
        {{myVal }}
        <div class="demo-drawer__content">
            <el-form :model="form" label-width="120px">
                <el-form-item label="发布标题">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="发布作者">
                    <el-select v-model="form.author" placeholder="please select">
                        <el-option v-for="data in authorList" :key="data.id" :label="data.name" :value="data.name" />
                    </el-select>
                </el-form-item>
                <el-form-item label="发布时间">
                    <el-col :span="16">
                        <el-date-picker v-model="form.date" type="datetime" placeholder="Pick a date" style="width: 100%" />
                    </el-col>
                </el-form-item>
                <el-form-item label="Activity type">
                    <el-radio-group v-model="form.status">
                        <el-radio label="true" />
                        <el-radio label="false" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit()">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-drawer>
</template>
<script setup>
import { defineExpose, ref, reactive, onMounted, inject, watch } from 'vue'
import { getTableList, editTabVal, getAuthor } from '../../../../api'
const tableData = ref([])
const authorList = ref([])
const showDrawer = ref(false)
const form = reactive({
    // title: myVal.row.title,
    // author: myVal.row,author,
    // date: myVal.row.date,
    // status: myVal.row.status,
    title: "",
    author: "",
    date: "",
    status: "",
})
// 调用父组件方法
const myVal = defineProps({
    id: {
        type:String,
        default:''
    },
    row: {
        type: Object
    }
})
// const myVal1 = ref([])
// const change =()=>{
//     myVal1.value = myVal
// }
// console.log(myVal.id,myVal.row)
const myEmit = defineEmits(["onMySonFunc"])
const onSubmit = () => {
    editTabVal(
        2, form
    ).then((res) => {
        showDrawer.value = false
        myEmit("onMySonFunc")
        ElMessage({
            message: '编辑成功',
            type: 'success',
        })
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

}
//抽屉关闭后
const handleClose = () => {
    showDrawer.value = false
}
const changeDra = () => {
    showDrawer.value = true
}
defineExpose({ changeDra })
// 监听地区id
watch(
    () => myVal.row,
    (a, b) => {
        console.log(a, b, "aaa")
    },
    {
        deep: true,
        immediate: true,
        flush: 'post'
    }
),
    onMounted(() => {
        // change()
        getAuthor().then((res) => {
            authorList.value = res.data
            // console.log(authorList.value,res.data)
        })
    })
</script>