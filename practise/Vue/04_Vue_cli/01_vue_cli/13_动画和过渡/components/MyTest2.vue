<template>
    <div>
        <button @click="show = !show">点我切换</button>
        <transition-group appear name="my">
            <h1 v-show="show" key="1">hello vue</h1>
            <h1 v-show="!show" key="2">hello vue</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>

<style lang="less" scoped>
h1 {
    background-color: rgb(219, 219, 180);
}
.my-enter,
.my-leave-to {
    transform: translateX(-100%);
}
.my-leave,
.my-enter-to {
    transform: translateX(0);
}
.my-enter-active,
.my-leave-active {
    transition: 1s;
}
</style>
