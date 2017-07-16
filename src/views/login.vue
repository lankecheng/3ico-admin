<template>
    <div>
    <el-card class="login-wrap">
        <div class="hd" slot="header">
            <img src="../assets/images/logo.png" height="53" width="155">
        </div>
        <div class="bd">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="nick">
                    <el-input v-model="form.nick" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="form.pwd" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="验证码" prop="captcha">
                    <el-input v-model="form.captcha" style="width: 100px; vertical-align: top;"/>
                    <img style="vertical-align: top;" :src="captcha" height="36" />
                </el-form-item>
                <el-form-item>
                    <el-button @click="onSubmit" type="primary">登录3ICO</el-button>
                    <el-button @click="$router.push({
                        path: 'register'
                    })">注册账号</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
    </div>
</template>

<script type="text/babel">
import {
    mapState,
    mapActions,
} from 'vuex';

export default{
    // title: '注册',
    data () {
        return {
            captcha: '',
            form: {
                nick: '',
                pwd: '',
                captcha: '',
                captcha_id: '',
            },
            rules: {
                nick: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                captcha: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        ...mapActions({
            getCaptcha: 'getCaptcha',
            login: 'login',
        }),
        onSubmit() {
            const data = this.form;

            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.login(data).then((res) => {
                        if (res.error_code === 0) {
                            this.$message('登录成功');
                            this.$router.push({
                                path: '/'
                            });
                        }
                    });
                }
            });
        },
    },
    created() {
        this.getCaptcha().then((res) => {
            this.captcha = 'data:image/png;base64,' + res.data.captcha;
            this.form.captcha_id = res.data.captcha_id;
        });
    }
};
</script>

<style lang="scss" scoped>
    .login-wrap{
        width: 400px;
        margin: 100px auto;
        .hd{
            text-align: center;
        }
    }
</style>
