<template>
    <button v-on:click="isShow = !isShow">click</button>
    <TestDemo v-if="isShow"></TestDemo>
</template>

<script>
import TestDemo from "./components/TestDemo.vue";
import { ref } from "vue";
export default {
    name: "App",
    components: { TestDemo },
    setup() {
        let isShow = ref(true);
        return {
            isShow,
        };
    },
};
</script>

<style></style>
