<template>
    <div>
    <el-card class="login-wrap">
        <div class="hd" slot="header">
            <img src="../assets/images/logo.png" height="53" width="155">
        </div>
        <div class="bd">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="nickname">
                    <el-input v-model="form.nickname" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="验证码" prop="vcode">
                    <el-input v-model="form.vcode" style="width: 100px; vertical-align: top;"/>
                    <img style="vertical-align: top;" src="http://oauth.meitu.com/oauth2/code?appid=1291231&t=1500024490" height="36" />
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
export default{
    // title: '注册',
    data () {
        const validNick = (rule, value, callback) => {
            if (!value.match(/^[\u4E00-\u9FA5a-z0-9]+$/)) {
                callback(new Error('昵称由小写英文字母、中文、数字组成!'));
            } else {
                callback();
            }
        };

        const validPass = (rule, value, callback) => {
            if (!value.match(/^[A-Za-z0-9~!@#$%^&*_-]+$/)) {
                callback(new Error('密码由英文字母、数字、符号组成!'));
            } else if (this.form.checkPassword !== '') {
                this.$refs.form.validateField('checkPassword');
            }
            callback();
        };

        return {
            vcodeDialog: {
                show: false,
            },
            form: {
                nickname: '',
                password: '',
                checkPassword: '',
                phone: '',
                vcode: '',
                agree: false,
            },
            rules: {
                nickname: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' },
                    {
                        validator: validNick,
                        trigger: 'blur'
                    },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: validPass,
                        trigger: 'blur'
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                vcode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        onSubmit() {
            console.log(this.form);
        },
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
