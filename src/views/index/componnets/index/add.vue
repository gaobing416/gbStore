<template>
        <el-drawer v-model="showDrawer" title="I am the title" direction="rtl" :before-close="handleClose">
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
                            <el-date-picker v-model="form.date" type="datetime" placeholder="Pick a date"
                                style="width: 100%" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Activity type">
                        <el-radio-group v-model="form.status">
                            <el-radio label="true" />
                            <el-radio label="false" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-drawer>
</template>
<script setup>
import { defineExpose, ref, reactive, onMounted } from 'vue'
import { getTableList, delTabVal, editTabVal, getAuthor ,addData} from '../../../../api'
import moment from 'moment';
const authorList = ref([])
const showDrawer = ref(false)
const form = reactive({
    title: '',
    author: '',
    date:'',
    status: '',
})
// moment.locale(form.date);
// 调用父组件方法
const myEmit = defineEmits(["onMySonFunc"])
const onSubmit = () => {
    addData(
        form
    ).then((res)=>{
        showDrawer.value = false
        myEmit("onMySonFunc")
        ElMessage({
            message: '添加成功',
            type: 'success',
        })
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    
}
//抽屉关闭后
const handleClose = () => {
    showDrawer.value = false

}
const changeDra =()=>{
    showDrawer.value = true
}
defineExpose({changeDra})
onMounted(() => {
    getAuthor().then((res) => {
        authorList.value = res.data
        // console.log(authorList.value,res.data)
    })
})
</script>