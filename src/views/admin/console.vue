<template>
  <div>
    欢迎使用3ICO后台管理系统~
  </div>
</template>

<script type="text/babel">
export default{
    title: '个人中心',
    data () {
        return {}
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // 避免导航条目仍在激活状态
            vm.$parent.activeIndex = new Date().toString();
        });
    },
};
</script>

<style lang="scss" scoped>
</style>
