<template>
    <div>
    <el-card class="register-wrap">
        <div class="hd" slot="header">
            <img src="../assets/images/logo.png" height="53" width="155">
        </div>
        <div class="bd">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPassword">
                    <el-input v-model="form.checkPassword" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                    <el-input v-model="form.phone" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="验证码" prop="vcode">
                    <el-input v-model="form.vcode" style="width: 100px;"/>
                    <el-button @click="handleGetVcode">获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="form.agree">我已认真阅读并同意3ICO的使用协议</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button :disabled="!form.agree" @click="onSubmit" type="primary">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
    <el-dialog
    title="图形验证码"
    :visible.sync="vcodeDialog.show"
    size="tiny">
        <div>
            <el-input style="width: 100px; vertical-align: top;"/>
            <img src="http://oauth.meitu.com/oauth2/code?appid=1291231&t=1500024490" height="36" />
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="vcodeDialog.show = false">确 定</el-button>
        </span>
    </el-dialog>
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

        const validCheckPass = (rule, value, callback) => {
            if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        const validPhone = (rule, value, callback) => {
            if (!value.match(/^1\d{10}$/)) {
                callback(new Error('请输入正确手机号'));
            } else {
                callback();
            }
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
                checkPassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: validCheckPass,
                        trigger: 'blur',
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    {
                        validator: validPhone,
                        trigger: 'blur'
                    },
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
        handleGetVcode() {
            this.vcodeDialog.show = true;
        }
    }
};
</script>

<style lang="scss" scoped>
    .register-wrap{
        width: 400px;
        margin: 100px auto;
        .hd{
            text-align: center;
        }
    }
</style>
