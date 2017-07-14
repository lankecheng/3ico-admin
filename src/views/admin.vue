<template>
  <div>
    <div class="hd">
        <el-button type="primary" @click="handleAdd">新增</el-button>
    </div>
    <el-table
        :data="data"
        stripe
        border>
        <el-table-column
          prop="nickname"
          label="昵称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="200">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建日期">
        </el-table-column>
        <el-table-column
        width="180"
        label="操作">
          <template scope="scope">
            <el-button-group>
            <el-button @click="handleEdit(scope)" size="small">修改</el-button>
            <el-button @click="handleDel(scope)" size="small">删除</el-button>
            </el-button-group>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog
    size="tiny"
    title="管理员设置"
    :visible.sync="dialog.show"
    :modal-append-to-body="false">
        <el-form ref="form" :model="dialog.data" :rules="dialog.rules" label-width="80px">
            <el-form-item label="用户名" prop="nickname">
                <el-input v-if="!dialog.isEdit" v-model="dialog.data.nickname"/>
                <span v-else>{{dialog.data.nickname}}</span>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="dialog.data.password" type="password"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
                <el-input v-model="dialog.data.checkPassword" type="password"/>
            </el-form-item>
        </el-form>
        <div slot="footer">
        <el-button @click="handleSubmit" type="primary">确认</el-button>
        <el-button @click="dialog.show = false">取消</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
export default{
    title: '项目管理员',
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
            } else if (this.dialog.data.checkPassword !== '') {
                this.$refs.form.validateField('checkPassword');
            }
            callback();
        };

        const validCheckPass = (rule, value, callback) => {
            if (value !== this.dialog.data.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            dialog: {
                show: false,
                isEdit: false,
                data: {
                    nickname: '',
                    password: '',
                    checkPassword: '',
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
                },
            },
        };
    },
    computed: {
        data() {
            return [
                {
                    nickname: 'nickname1',
                    password: 'password',
                    created_at: '2017-12-12 12:00',
                },
                {
                    nickname: 'nickname2',
                    password: 'password',
                    created_at: '2017-12-12 12:00',
                },
                {
                    nickname: 'nickname2',
                    password: 'password',
                    created_at: '2017-12-12 12:00',
                },
            ];
        },
    },
    methods: {
        handleDialog() {
            if (this.$refs.form) this.$refs.form.resetFields();
            this.dialog.show = true;
        },
        handleAdd() {
            this.dialog.isEdit = false;
            this.handleDialog();
            this.dialog.data.nickname = '';
        },
        handleEdit(item) {
            this.dialog.isEdit = true;
            this.handleDialog();
            this.dialog.data.nickname = item.row.nickname;
        },
        handleDel(item) {
            console.log(item);
            this.$confirm('确认删除?', {
                type: 'warning'
            }).then(() => {
            });
        },
        handleSubmit() {
            console.log(this.dialog.data);
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.dialog.show = false;
                }
            });
        },
    }
};
</script>

<style lang="scss" scoped>
.hd{
    margin-bottom: 20px;
}
</style>
