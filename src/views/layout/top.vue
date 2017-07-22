<template>
    <div class="Frame top">
        <div class="View container">
            <span>www.3ico.com</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
                <i class="ico-phone"></i>
                +13615966354
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
            ICO is Initial Crypto-Token Offering 比特币：<span class="green">15836.9178</span>元
            以太坊：<span class="green">1357.66761</span> 元
            </span>
            <ul class="menus">
                <li>
                    <router-link v-if="user" class="login" to="/login">
                        <i class="ico-user"></i>
                        登录
                    </router-link>
                    <span v-else>
                        <i class="ico-user"></i>
                        已登录
                    </span>
                </li>
                <li>
                    <router-link v-if="user" class="register" to="/register">
                        注册
                    </router-link>
                    <span @click="handleLogout" v-else class="register">
                        退出
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapActions,
} from 'vuex';

    export default {
        computed: {
            ...mapState({
                user: state => state.user,
            })
        },
        methods: {
            ...mapActions({
                logout: 'logout',
            }),
            handleLogout() {
                this.logout().then((res) => {
                    location.href = location.origin;
                    // this.$router.push({
                    //     path: '/login'
                    // });
                });
            }
        }
    }
</script>
