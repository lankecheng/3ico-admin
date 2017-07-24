<template>
  <div>
        </el-form>
        <el-form ref="form" :model="data" :rules="rules" label-width="80px">
                <el-form-item label="图标" prop="icon">
                    <el-upload
                  class="icon-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleIconSuccess"
                  :before-upload="beforeIconUpload">
                  <img v-if="data.icon" :src="data.icon" class="icon">
                  <i v-else class="el-icon-plus icon-uploader-icon"></i>
                </el-upload>
                </el-form-item>
                <el-form-item label="摘要" prop="digest">
                <el-input v-model="data.digest" :rows="5" type="textarea"/>
                </el-form-item>
                <el-form-item label="简介" prop="intro">
                    <vue-editor v-model="data.intro"></vue-editor>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-top: 20px;" type="primary" @click="save">保存</el-button>
                </el-form-item>
            </el-form>
  </div>
</template>

<script type="text/babel">
import { VueEditor } from 'vue2-editor';
import {
    mapState,
    mapActions,
} from 'vuex';

export default{
    title: '项目简介编辑',
    components: {
        VueEditor,
    },
    data() {
        return {
            data: {
                pid: '',
                intro: '',
                icon: '',
                digest: '',
            },
            rules: {}
        }
    },
    methods: {
        ...mapActions({
            getProjectIntro: 'getProjectIntro',
            modifyProjectIntro: 'modifyProjectIntro'
        }),
        save() {
            this.modifyProjectIntro(this.data).then((res) => {
                this.$message('保存成功');
            });
        },
        handleIconSuccess(res, file) {},
        beforeIconUpload(file) {},
    },
    created() {
        this.getProjectIntro({
            pid: this.$route.query.pid
        }).then((res) => {
            this.data = res.project;
        });
    }
};
</script>

<style lang="scss">
    .icon-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .icon-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .icon-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .icon {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
