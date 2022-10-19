<template>
    <div id="root">
        动画方式实现
        <test></test>
        过度方式实现
        <test2></test2>
    </div>
</template>

<script>
import test from "./components/MyTest.vue";
import test2 from "./components/MyTest2.vue";
export default {
    name: "App",
    components: {
        test,
        test2,
    },
};
</script>
