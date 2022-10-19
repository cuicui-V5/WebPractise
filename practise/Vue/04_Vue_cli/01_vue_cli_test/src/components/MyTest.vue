<template>
    <div>
        <button @click="show = !show">点我切换</button>
        <transition appear name="my">
            <h1 v-show="show">hello vue</h1>
        </transition>
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
    background-color: yellow;
}
.my-enter-active {
    animation: myAni 1s;
}
.my-leave-active {
    animation: myAni 1s reverse;
}
@keyframes myAni {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX();
    }
}
</style>
