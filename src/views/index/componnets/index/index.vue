<template>
    <div>
        <div style="margin-bottom: 5px;">
            <!-- <el-button @click="handleDeleteAll">全部删除</el-button> -->
            <el-button @click="handleAdd">添加数据</el-button>
        </div>
        <el-table :data="tableData" style="width: 70%" border table-layout="fixed" el-table-column
            @selection-change="handleSelect">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="id" label="序号" width="55" />
            <el-table-column prop="date" label="发布时间" width="200" />
            <el-table-column prop="title" label="发布标题" width="180" />
            <el-table-column prop="author" label="发布作者" width="180" />
            <el-table-column prop="status" label="状态" width="80" />
            <el-table-column label="opration">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)" :plain="true">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                        :plain="true">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="demo-pagination-block" style="margin-top: 10px;">

            <el-pagination v-model:current-page="page.currentPage" v-model:page-size="page.pageSize" :small="small"
                :disabled="disabled" :background="background" layout="total, prev, pager, next" :total="total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
        <div>
            <!-- 抽屉 -->
            <Add ref="showRef" @onMySonFunc="funcToSon"></Add>
            <Edit ref="showRefe"></Edit>
        </div>
    </div>
</template>
<script  setup>
// import { ElMessage,DrawerProps } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { getTableList, delTabVal, editTabVal, pageCut } from '../../../../api'
import Add from './add.vue';
import Edit from './edit.vue';
const showRef = ref(null);
const showRefe = ref(null);
const tableData = ref([])
const tableVal = ref([])
const background = ref(false)
const small = ref(false)
const disabled = ref(false)

//  添加数据
const handleAdd = (data) => {
    showRef.value.changeDra()
    console.log(showRef.value)
}
const funcToSon = () => {
    upDataPage()
}
const page = reactive({
    currentPage: 1,
    pageSize: 5,
    // total:30
})
const total = ref(0)
// 编辑
const handleEdit = (index, row) => {
    showRefe.value.changeDra()
    // editTabVal({

    // }).then(() => {
    //     upDataPage()

    // })
    console.log(index, row)
}
// 删除一条
const handleDelete = (index, row) => {
    // console.log(index, row, tableData.value[0])
    delTabVal(tableData.value[index].id).then(() => {
        ElMessage({
            message: '删除成功',
            type: 'success',
        })
        upDataPage()
    }).catch(() => {
        ElMessage({
            message: '删除失败,请稍后再试',
            type: 'warning',
        })
    })
}
//  勾选的数据
const handleSelect = (data) => {
    console.log(data)
}

// 分页
const handleSizeChange = (val) => {
    // upDataPage()
}
const handleCurrentChange = (val) => {
    pageCut(val).then((res) => {
        tableData.value = res.data
    })
}
const upDataPage = () => {
    getTableList().then((res) => {
        {   tableVal.value =res.data
            total.value = tableVal.value.length }
    })
    pageCut(page.currentPage).then((res) => {
        tableData.value = res.data
    })
}
onMounted(() => {
    upDataPage()
})
</script>
<style scoped>
.demo-pagination-block+.demo-pagination-block {
    margin-top: 10px;

}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>