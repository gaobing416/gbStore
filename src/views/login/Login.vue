<template>
    <el-form :model="form" label-width="120px" :rules="rules" class="demo-ruleForm" ref="ruleFormRef">
        <!-- <div>登录</div> -->
        <el-form-item label="用户名" prop="account">
            <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { login } from '../../api/index'
const ruleFormRef = ref()
const form = reactive({
    account: 'admin',
    password: null,
})
// 校验
const rules = reactive({
    account: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})
//确定
const submitForm =  (formEl) => {
  if (!formEl) return
   formEl.validate(async(valid, fields) => {
    if (valid) {
        // 校验通过
    let res = await login(form)
      console.log(res)
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang="ts" scoped>

</style>