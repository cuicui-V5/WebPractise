<template>
    <h1>welcome to vue3</h1>
    <h2>name:{{ person.name }}</h2>
    <h2>age:{{ person.age }}</h2>
    <button @click="clickAdd">点我+1 age={{ person.age }}</button>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "App",
    components: {},
    setup() {
        const person = reactive({
            name: "tim",
            age: 18,
            job: "frontend",
        });
        function clickAdd() {
            person.age++;
            console.log(person.age);
        }
        return {
            person,
            clickAdd,
        };
    },
};
</script>

<style></style>
