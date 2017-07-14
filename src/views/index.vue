<template>
<div class="View container">
    <div class="Frame menu">
        <div class="logo">
        <router-link to="/">
        <img src="../assets/images/logo.png"/>
        <em>3ICO后台管理系统</em>
        </router-link>
        </div>
        <el-menu :default-active="activeIndex" class="bd" router>
            <el-menu-item index="admin">项目管理员</el-menu-item>
            <el-menu-item index="user">用户列表</el-menu-item>
            <el-menu-item index="asset">资产流水</el-menu-item>
        </el-menu>
    </div>
    <div class="View main">
        <div class="View content">
            <router-view class="Frame content"/>
        </div>
        <div class="Frame top">
            <div class="Widget crumb">{{title}}</div>
            <div class="menus">
                <el-button @click="$router.push({
                    path: '/login'
                })" type="text">退出</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/babel">
import {
    mapState,
    mapActions,
} from 'vuex';

import {bus} from '../utils/';

export default {
    data() {
        return {
            activeIndex: ''
        };
    },
    computed: {
        ...mapState({
            title: state => state.title,
        }),
    },
    created () {
        // 初次进入页面关联路由 meta.index 处理展开激活的菜单
        const activeIndex = this.$route.meta.index || '';
        this.activeIndex = activeIndex;

        bus.$on('handleMenuActiveChange', (activeIndex) => {
            this.activeIndex = activeIndex;
        });
    }
};
</script>

<style lang="scss" scoped>
    .View.container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .Frame.menu {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 180px;
        height: 100%;
        background-color: #eef1f6;

        .logo {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 54px;
            padding: 5px 0;
            text-align: center;
            background-color: #E5E9F2;
            a{
                display: block;
                text-decoration: none;
            }
            img {
                display: block;
                margin: 0 auto;
                height: 40px;
            }
            em {
                display: block;
                font-style: normal;
                font-size: 12px;
                color: #333;
            }
        }
        .bd {
            position: absolute;
            top: 64px;
            bottom: 0;
            left: 0;
            overflow-x: hidden;
            overflow-y: auto;
            width: 100%;
        }
    }
    .View.main {
        position: absolute;
        z-index: 2;
        left: 180px;
        right: 0;
        top: 0;
        height: 100%;
        background-color: #fff;
        overflow: auto;
    }
    .View.content {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        // z-index: 8;
        overflow: auto;
        min-width: 1080px;
    }
    .Frame.content {
        padding: 40px;
        &.outer {
            height: 100%;
            padding: 0;
            iframe{
                display: block;
            }
        }
    }
    .Frame.top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        // z-index: 9;
        min-width: 1000px;
        height: 63px;
        padding: 0 40px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(128, 142, 150, 0.2);
        .Widget.crumb {
            float: left;
            line-height: 63px;
            font-size: 16px;
            font-weight: bold;
            color: #666;
        }
        .menus{
            float: right;
            line-height: 63px;
        }
    }
</style>
