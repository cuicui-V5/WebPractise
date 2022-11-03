<template>
    <h1>当前数字是 {{ num1 }}</h1>
    <button v-on:click="num1++">点我+1</button>
    <h2>鼠标坐标为: x: {{ point.x }} y: {{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hook/usePoint";
export default {
    name: "TestDemo",
    setup() {
        let point = usePoint();
        console.log("----setup-----");

        let num1 = ref(0);

        return { num1, point };
    },
};
</script>

<style></style>
