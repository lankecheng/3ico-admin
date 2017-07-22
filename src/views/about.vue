<template>
    <div>

    <top/>
    <headerComp/>
    <div>about</div>
    <bottom/>
    </div>
</template>

<script type="text/babel">
import {
    mapState,
    mapActions,
} from 'vuex';

import top from './layout/top.vue';
import headerComp from './layout/header.vue';
import bottom from './layout/bottom.vue';

export default{
    // title: '注册',
    components: {
        top,
        headerComp,
        bottom,
    },

};
</script>

<style lang="scss" scoped>

</style>
