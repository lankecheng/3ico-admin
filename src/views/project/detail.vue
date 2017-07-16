<template>
  <div>
      <vue-editor v-model="intro"></vue-editor>
      <el-button style="margin-top: 20px;" type="primary" @click="save">保存</el-button>
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
            pid: '',
            intro: ''
        }
    },
    methods: {
        ...mapActions({
            getProjectIntro: 'getProjectIntro',
            modifyProjectIntro: 'modifyProjectIntro'
        }),
        save() {
            this.modifyProjectIntro({
                pid: this.pid,
                intro: this.intro,
            }).then((res) => {
                this.$message('保存成功');
            });
        }
    },
    created() {
        this.getProjectIntro({
            pid: this.$route.query.pid
        }).then((res) => {
            this.pid = res.project.id;
            this.intro = res.project.intro;
        });
    }
};
</script>
