<template>
    <div class="box">
        <div class="ltext">登录</div>
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
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { login } from '../../api/index'
import { useRouter } from 'vue-router';
import { setToken } from '../../untils/auth'
const router = useRouter()
const ruleFormRef = ref()
const form = reactive({
    account: 'admin',
    password: null,
})
// 校验
const rules = reactive({
    account: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' },
    ],
})
//确定
const uid = ref(0)
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            // 校验通过
            let res = await login()
            let { account, token, status, password } = res.data[uid.value]  //接口里面
            console.log(res.data[uid.value])
            // 验证跳转首页
            if (form.account == account & form.password == password) {
                router.push('/home')
                setToken(token) //存进去
                // alert('登录成功')
            } else if (form.account != account & form.password == password) {
                alert('用户名错')
                // console.log("登录失败")
            } else {
                alert('用户名或密码错误')
            }
        } else {
            console.log('error submit!')
        }
    })
}
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style lang="scss" scoped>
    // *{
    //     margin: 0;
    //     padding: 0;
    // }
    .box{
        // margin: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;   
        margin:10% auto;
        border: 1px solid bisque;
        background-color:rgb(0, 255, 242) ;
        .ltext{
            text-align: center;
            // margin: 0 auto;
            line-height: 30px;
            margin-bottom: 15px;
        }
    }
    .demo-ruleForm{
        // margin:0 auto;
    }
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    