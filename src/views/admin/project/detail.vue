<template>
  <div>
        </el-form>
        <el-form ref="form" :model="data" :rules="rules" label-width="100px">
                <el-form-item label="图标" prop="icon">
                    <el-upload
                  class="icon-uploader"
                  :action="API_ORIGIN + '/api/project_admin/upload_icon'"
                  :show-file-list="false"
                  :headers="{
                        Authorization: localStorage.getItem('token'),
                        'Project-Id': $route.query.pid,
                    }"
                    :with-credentials="true"
                  :on-success="handleIconSuccess"
                  :before-upload="beforeIconUpload">
                  <img v-if="data.icon" :src="data.icon" class="icon">
                  <i v-else class="el-icon-plus icon-uploader-icon"></i>
                </el-upload>
                </el-form-item>
                <el-form-item label="白皮书" prop="wp">
                    <el-upload
                  :action="API_ORIGIN + '/api/project_admin/upload_wp'"
                  :headers="{
                        Authorization: localStorage.getItem('token'),
                        'Project-Id': $route.query.pid,
                    }"
                    :with-credentials="true"
                    :on-success="handleWpSuccess"
                    :show-file-list="false">
                  <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传pdf/word文件</div>
                </el-upload>
                <div style="color: #666;">{{wp.url}}</div>
                </el-form-item>
                <el-form-item label="摘要" prop="digest">
                <el-input v-model="data.digest" :rows="5" type="textarea"/>
                </el-form-item>
                <el-form-item label="简介" prop="intro">
                    <vue-editor v-model="data.intro"></vue-editor>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-top: 20px;" type="primary" @click="save">保存摘要及简介</el-button>
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
            API_ORIGIN: API_ORIGIN,
            localStorage: localStorage,
            iconUrl: '',
            wp: {},
            data: {
                id: '',
                intro: '',
                icon: '',
                digest: '',
                wp: '',
            },
            rules: {}
        }
    },
    methods: {
        ...mapActions({
            getProjectIntro: 'getProjectIntro',
            modifyProjectIntro: 'modifyProjectIntro',
            uploadIcon: 'uploadIcon',
        }),
        save() {
            const data = this.data;
            this.modifyProjectIntro({
                id: data.id,
                intro: data.intro,
                digest: data.digest,
            }).then((res) => {
                this.$message('保存成功');
            });
        },
        handleIconSuccess(res, file) {
            this.data.icon = URL.createObjectURL(file.raw);
        },
        beforeIconUpload(file) {},
        handleWpSuccess(res, file) {
            this.wp = {
              name: res.project.wp,
              url: res.project.wp,
            };
        },
        beforeWpUpload(file) {},
        handlePreview(file) {
            // console.log(file);
        },
    },
    created() {
        this.getProjectIntro({
            pid: this.$route.query.pid
        }).then((res) => {
            this.data = res.project;
            this.wp = {
              name: res.project.wp,
              url: res.project.wp,
            };
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
