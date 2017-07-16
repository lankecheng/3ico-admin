<template>
    <div>
    <el-card class="register-wrap">
        <div class="hd" slot="header">
            <img src="../assets/images/logo.png" height="53" width="155">
        </div>
        <div class="bd">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="昵称" prop="nick">
                    <el-input @blur="handleCheckNickname" v-model="form.nick" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="form.pwd" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPwd">
                    <el-input v-model="form.checkPwd" type="password" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input @blur="handleCheckMobile" v-model="form.mobile" style="width: 210px;"/>
                </el-form-item>
                <el-form-item label="验证码" prop="pin_code">
                    <el-input v-model="form.pin_code" style="width: 100px;"/>
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
            <el-input v-model="vcodeDialog.value" style="width: 100px; vertical-align: top;"/>
            <img :src="vcodeDialog.b64" height="36" />
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleSendPinCode">确 定</el-button>
        </span>
    </el-dialog>
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
            } else if (this.form.checkPwd !== '') {
                this.$refs.form.validateField('checkPwd');
            }
            callback();
        };

        const validCheckPass = (rule, value, callback) => {
            if (value !== this.form.pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        const validMobile = (rule, value, callback) => {
            if (!value.match(/^1\d{10}$/)) {
                callback(new Error('请输入正确手机号'));
            } else {
                callback();
            }
        };

        return {
            API_ORIGIN: API_ORIGIN,
            captcha_id: '',
            vcodeDialog: {
                show: false,
                b64: '',
                value: '',
            },
            form: {
                nick: '',
                pwd: '',
                checkPwd: '',
                mobile: '',
                pin_code: '',
                agree: false,
            },
            rules: {
                nick: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' },
                    {
                        validator: validNick,
                        trigger: 'blur'
                    },
                ],
                pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: validPass,
                        trigger: 'blur'
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                checkPwd: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: validCheckPass,
                        trigger: 'blur',
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    {
                        validator: validMobile,
                        trigger: 'blur'
                    },
                ],
                pin_code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        ...mapActions({
            checkNickname: 'checkNickname',
            checkMobile: 'checkMobile',
            getCaptcha: 'getCaptcha',
            register: 'register',
        }),
        onSubmit() {
            const data = this.form;

            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.register({
                        nick: data.nick,
                        pwd: data.pwd,
                        mobile: data.mobile,
                        pin_code: data.pin_code,
                    }).then((res) => {
                        if (res.error_code === 0) {
                            this.$message('注册成功');
                            this.$router.push({
                                path: '/'
                            });
                        }
                    });
                }
            });
        },
        handleSendPinCode() {
            this.vcodeDialog.show = false;
        },
        handleGetVcode() {
            this.getCaptcha().then((res) => {
                this.vcodeDialog.b64 = 'data:image/png;base64,' + res.data.captcha;
                this.captcha_id = res.data.captcha_id;
            });
            this.vcodeDialog.show = true;
        },
        handleCheckNickname() {
            this.$refs.form.validateField('nick', (err) => {
                if (!err) {
                    this.checkNickname({
                        nick: this.form.nickname
                    });
                }
            });
        },
        handleCheckMobile() {
            this.$refs.form.validateField('mobile', (err) => {
                if (!err) {
                    this.checkMobile({
                        mobile: this.form.mobile
                    });
                }
            });
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
