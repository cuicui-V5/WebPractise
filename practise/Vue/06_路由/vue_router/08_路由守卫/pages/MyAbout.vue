<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log("组件内进入守卫触发了");
        next();
    },
    beforeRouteLeave(to, from, next) {
        console.log("组件内离开路由触发了");
        next();
    },
};
</script>

<style lang="less" scoped></style>
