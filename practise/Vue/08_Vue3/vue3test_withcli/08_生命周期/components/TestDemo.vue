<template>
    <h1>当前数字是 {{ num1 }}</h1>
    <button v-on:click="num1++">点我+1</button>
</template>

<script>
import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} from "vue";
export default {
    name: "TestDemo",
    beforeCreate() {
        console.log("-----beforeCreate-----");
    },
    created() {
        console.log("-----created-----");
    },
    beforeMount() {
        console.log("-----beforeMount-----");
    },
    mounted() {
        console.log("-----mounted-----");
    },
    beforeUpdate() {
        console.log("-----beforeUpdate-----");
    },
    updated() {
        console.log("-----updated-----");
    },
    beforeUnmount() {
        console.log("-----beforeUnmount-----");
    },
    unmounted() {
        console.log("-----unmounted-----");
    },
    setup() {
        console.log("----setup-----");

        let num1 = ref(0);

        onBeforeMount(() => {
            console.log("----onBeforeMount----");
        });
        onMounted(() => {
            console.log("----onMounted----");
        });
        onBeforeUpdate(() => {
            console.log("----onBeforeUpdate----");
        });
        onUpdated(() => {
            console.log("----onUpdated----");
        });
        onBeforeUnmount(() => {
            console.log("----onBeforeUnmount----");
        });
        onUnmounted(() => {
            console.log("----onUnmounted----");
        });
        return { num1 };
    },
};
</script>

<style></style>
