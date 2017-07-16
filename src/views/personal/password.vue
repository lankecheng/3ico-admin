<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="原始密码" prop="password">
                <el-input v-model="form.password" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input v-model="form.password" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPassword">
                <el-input v-model="form.checkPassword" type="password" style="width: 210px;"/>
            </el-form-item>
            <el-form-item label="验证码" prop="vcode">
                <el-input v-model="form.vcode" style="width: 100px;"/>
                <el-button @click="handleGetVcode">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="onSubmit" type="primary">修改密码</el-button>
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
export default{
    title: '修改密码',
    data () {
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

        return {
            vcodeDialog: {
                show: false,
            },
            form: {
                password: '',
                checkPassword: '',
                vcode: '',
            },
            rules: {
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
