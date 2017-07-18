<template>
    <div>
        <h3>修改登录密码</h3>
        <el-form ref="pwd" :model="password" :rules="pwdRules" label-width="100px">
            <el-form-item label="原始密码" prop="old_pwd">
                <el-input v-model="password.old_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="新密码" prop="new_pwd">
                <el-input v-model="password.new_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="确认新密码" prop="check_new_pwd">
                <el-input v-model="password.check_new_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="验证码" prop="pin_code">
                <el-input v-model="password.pin_code" style="width: 100px;"/>
                <el-button @click="handleGetVcode">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="onChangePwd" type="success">修改密码</el-button>
            </el-form-item>
        </el-form>
        <h3>修改交易密码</h3>
        <el-form ref="tradePwd" :model="tradePassword" :rules="tradePwdRules" label-width="100px">
            <el-form-item label="原始密码" prop="password">
                <el-input v-model="tradePassword.old_trading_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input v-model="tradePassword.new_trading_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPassword">
                <el-input v-model="tradePassword.check_new_trading_pwd" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="验证码" prop="vcode">
                <el-input v-model="tradePassword.pin_code" style="width: 100px;"/>
                <el-button @click="handleGetVcode">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="onChangeTradePwd" type="success">修改密码</el-button>
            </el-form-item>
        </el-form>
        <el-dialog
        title="图形验证码"
        :visible.sync="vcodeDialog.show"
        :modal-append-to-body="false"
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
import {
    mapActions,
} from 'vuex';

export default{
    title: '修改密码',
    data () {
        const validPass = (rule, value, callback) => {
            if (!value.match(/^[A-Za-z0-9~!@#$%^&*_-]+$/)) {
                callback(new Error('密码由英文字母、数字、符号组成!'));
            } else if (this.password.check_new_pwd !== '') {
                this.$refs.pwd.validateField('check_new_pwd');
            }
            callback();
        };

        const validCheckPass = (rule, value, callback) => {
            if (value !== this.password.new_pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        const validPass2 = (rule, value, callback) => {
            if (!value.match(/^[A-Za-z0-9~!@#$%^&*_-]+$/)) {
                callback(new Error('密码由英文字母、数字、符号组成!'));
            } else if (this.tradePassword.check_new_pwd !== '') {
                this.$refs.tradePwd.validateField('check_new_pwd');
            }
            callback();
        };

        const validCheckPass2 = (rule, value, callback) => {
            if (value !== this.tradePassword.new_pwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            vcodeDialog: {
                show: false,
            },
            password: {
                old_pwd: '',
                new_pwd: '',
                check_new_pwd: '',
                pin_code: '',
            },
            tradePassword: {
                old_trading_pwd: '',
                new_trading_pwd: '',
                check_new_trading_pwd: '',
                pin_code: '',
            },
            pwdRules: {
                old_pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: validPass,
                        trigger: 'blur'
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                new_pwd: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: validPass,
                        trigger: 'blur'
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                check_new_pwd: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: validCheckPass,
                        trigger: 'blur',
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                pin_code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            },
            tradePwdRules: {
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: validPass2,
                        trigger: 'blur'
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                checkPassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: validCheckPass2,
                        trigger: 'blur',
                    },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                pin_code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        ...mapActions({
            changeUserPwd: 'changeUserPwd',
            changeUserTradePwd: 'changeUserTradePwd',
        }),
        onChangePwd() {
            const data = this.password;
            console.log(data);
            this.$refs.pwd.validate((valid) => {
                if (valid) {
                    this.changeUserPwd({
                        old_pwd: data.old_pwd,
                        new_pwd: data.new_pwd,
                        pin_code: data.pin_code,
                    }).then((res) => {
                        console.log(res);
                    });
                }
            });
        },
        onChangeTradePwd() {
            const data = this.tradePassword;
            console.log(data);
            this.$refs.tradePwd.validate((valid) => {
                if (valid) {
                    this.changeUserTradePwd({
                        old_trading_pwd: data.old_trading_pwd,
                        new_trading_pwd: data.new_trading_pwd,
                        pin_code: data.pin_code,
                    }).then((res) => {
                        console.log(res);
                    });
                }
            });
        },
        handleGetVcode() {
            this.vcodeDialog.show = true;
        }
    }
};
</script>
