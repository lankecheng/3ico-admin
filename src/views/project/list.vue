<template>
  <div>
    <div class="hd">
        <el-button type="primary" @click="handleAdd">新增</el-button>
    </div>
    <el-table
        v-loading.body="loading"
        :data="projects"
        stripe
        border>
        <el-table-column
          prop="code"
          label="编码">
          </el-table-column>
          <el-table-column
          prop="name"
          label="名称">
          </el-table-column>
          <el-table-column
          prop="begin_time"
          label="开始时间">
          </el-table-column>
          <el-table-column
          prop="end_time"
          label="结束时间">
          </el-table-column>
          <el-table-column
          prop="target_amount"
          label="目标金额">
          </el-table-column>
          <el-table-column
          prop="personal_max"
          label="个人投资限额">
          </el-table-column>
          <el-table-column
          label="状态">
          <template scope="scope">
            {{status[scope.row.status]}}
          </template>
          </el-table-column>
          <el-table-column
          prop="complete_amount"
          label="已完成金额">
          </el-table-column>
        <el-table-column
          prop="successful"
          label="众筹成功">
        </el-table-column>
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建日期">
        </el-table-column>
        <el-table-column
        label="操作">
          <template scope="scope">
            <el-button-group>
            <!-- <el-button v-if="scope.row.status === 0" @click="handleEdit(scope)" size="small">修改</el-button> -->
            <el-button @click="handleDetail(scope)" size="small">简介</el-button>
            <el-button v-if="scope.row.status === 0" @click="handlePublish(scope)" size="small">发布</el-button>
            <!-- <el-button v-if="scope.row.status === 1" @click="handleDel(scope)" size="small">下线</el-button> -->
            </el-button-group>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog
    size="tiny"
    title="项目设置"
    :visible.sync="dialog.show"
    :modal-append-to-body="false">
        <el-form ref="form" :model="dialog.data" :rules="dialog.rules" label-width="80px">
            <el-form-item label="项目编码" prop="code">
                <el-input v-model="dialog.data.code"/>
            </el-form-item>
            <el-form-item label="项目名称" prop="name">
                <el-input v-model="dialog.data.name"/>
            </el-form-item>
            <el-form-item label="开始时间" prop="begin_time">
                <el-date-picker
                  v-model="dialog.data.begin_time"
                  type="datetime"
                  @change="handleTime($event, 'begin_time')"
                  placeholder="选择开始时间"/>
            </el-form-item>
            <el-form-item label="结束时间" prop="end_time">
                <el-date-picker
                  v-model="dialog.data.end_time"
                  type="datetime"
                  @change="handleTime($event, 'end_time')"
                  placeholder="选择结束时间"/>
            </el-form-item>
            <el-form-item label="目标金额" prop="target_amount">
                <el-input v-model="dialog.data.target_amount"/>
            </el-form-item>
            <el-form-item label="个人限额" prop="personal_max">
                <el-input v-model="dialog.data.personal_max"/>
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
import {
    mapState,
    mapActions,
} from 'vuex';

const DEFAULT_DATA = {
    code: '',
    name: '',
    begin_time: '',
    end_time: '',
    target_amount: '',
    personal_max: '',
};

export default{
    title: '项目列表',
    data () {
        return {
            loading: true,
            status: {
                0: '未发布',
                1: '已发布',
                2: '已下线',
            },
            dialog: {
                show: false,
                isEdit: false,
                data: Object.assign({}, DEFAULT_DATA),
                rules: {
                    // code: [
                    //     { required: true, message: '请输入项目编码', trigger: 'blur' },
                    // ],
                    // name: [
                    //     { required: true, message: '请输入项目名称', trigger: 'blur' },
                    // ],
                    // begin_time: [
                    //     { required: true, message: '请输入开始时间', trigger: 'blur' },
                    // ],
                    // end_time: [
                    //     { required: true, message: '请输入结束时间', trigger: 'blur' },
                    // ],
                    // target_amount: [
                    //     { required: true, message: '请输入目标金额', trigger: 'blur' },
                    // ],
                    // personal_max: [
                    //     { required: true, message: '请输入个人限额', trigger: 'blur' },
                    // ],
                }
            },
        };
    },
    computed: {
        ...mapState({
            user: 'user',
            projects: 'projects',
        }),
    },
    methods: {
        ...mapActions({
            getProjects: 'getProjects',
            createProject: 'createProject',
            publishProject: 'publishProject',
        }),
        handleDialog() {
            if (this.$refs.form) this.$refs.form.resetFields();
            this.dialog.show = true;
        },
        handleAdd() {
            this.dialog.isEdit = false;
            this.dialog.data = Object.assign({}, DEFAULT_DATA);
            this.handleDialog();
        },
        handleEdit(item) {
            const row = item.row;
            this.dialog.isEdit = true;
            this.dialog.data = Object.assign({}, {
                code: row.code,
                name: row.name,
                begin_time: row.begin_time,
                end_time: row.end_time,
                target_amount: row.target_amount,
                personal_max: row.personal_max,
            });
            this.handleDialog();
        },
        handleDel(item) {
            this.$confirm('确认下线?', {
                type: 'warning'
            }).then(() => {
            });
        },
        handlePublish(item) {
            this.publishProject({pid: item.row.id}).then((res) => {
                this.$message('发布成功');
                this.initList();
            });
        },
        handleDetail(item) {
            this.$router.push({
                path: '/project/detail',
                query: {
                    pid: item.row.id,
                }
            });
        },
        handleTime(val, name) {
            this.dialog.data[name] = val;
        },
        handleSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.createProject(this.dialog.data).then((res) => {
                        this.$message('新增成功');
                    });
                    this.dialog.show = false;
                }
            });
        },
        initList() {
            this.loading = true;
            this.getProjects().then(() => {
                this.loading = false;
            }).catch(() => {
                this.loading = false;
            });
        }
    },
    created() {
        this.initList();
    }
};
</script>

<style lang="scss" scoped>
.hd{
    margin-bottom: 20px;
}
</style>
