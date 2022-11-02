<template>
    <h1>welcome to vue3</h1>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <button @click="clickAdd">点我+1 age={{ age }}</button>
</template>

<script>
import { ref } from "vue";
export default {
    name: "App",
    components: {},
    setup() {
        let name = ref("tim");
        let age = ref(18);
        function clickAdd() {
            age.value++;
            console.log(age);
        }
        return {
            name,
            age,
            clickAdd,
        };
    },
};
</script>

<style></style>
