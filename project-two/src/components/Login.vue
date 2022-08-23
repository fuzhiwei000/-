<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop='username'>
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>

                </el-form-item>
            </el-form>
        </el-card>


    </div>
</template>

<script>
import { nameRule, passRule } from "../utils/vaildate";
import { setToken } from "../utils/setToken";
import { login } from "../api/api";
export default {
    data() {

        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }]
            }
            // labelPosition:'left'
            // [
            //     { require: true, message: '请输入密码', trigger: 'blur' },
            //     { min: 6, max: 12, message: '长度应在6-12字符', trigger: 'blur' }
            // ]
            // [
            //     { require: true, message: '请输入用户名', trigger: 'blur' },
            //     { min: 4, max: 10, message: '长度应在4-10字符之间', trigger: 'blur' }
            // ]
        }
    },
    methods: {
        login(form) {
            // console.log(this.$refs)
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form)

                    login(this.form).then(res => {
                        if (res.data.status === 200) {
                            setToken('username', res.data.username)
                            setToken('token', res.data.token)
                            this.$message({ message: res.data.message, type: 'success' })//message:提示什么信息，type:展示什么类型
                            this.$router.push('/home')
                         

                        }
                    })
                } else {
                    console.error(this.form)
                }
            })
        }
    },
    // this.service.post('/login', this.form)
    //     .then((res) => {
    //         if (res.data.status === 200) {
    //             setToken('username', res.data.username)
    //             setToken('token', res.data.token)
    //             this.$message({ message: res.data.message, type: 'success' })//message:提示什么信息，type:展示什么类型
    //         }
    //         console.log(res)
    //     })
}
</script>

<style lang="less">
.login {
    width: 100%;
    min-width: 100%;
    height: 100%;
    position: absolute;
    background: url(@/assets/bg\ .jpg) center no-repeat;

    // .el-card {
    //     background: #65768557;
    // }

    .box-card {
        width: 450px;
        margin: 200px auto;
        background: #65768557;
        color: #fff;

        // .el-card__header{
        //     font-size: 24px;
        // }
        .el-form .el-form-item__label {
            color: #fff;
            font-size: 20px;
        }

        .clearfix {
            font-size: 34px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>