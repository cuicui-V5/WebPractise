<template>
    <h1>welcome to vue3</h1>
    <h2>name:{{ person.name }}</h2>
    <h2>age:{{ person.age }}</h2>
    <button @click="clickAdd">点我+1 age={{ person.age }}</button>
    <button v-on:click="handleHello">点我触发hello事件</button>
    <slot name="MySlot"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "TestDemo",
    components: {},
    props: ["name", "age"],
    emits: ["hello"],
    beforeCreate() {
        console.log("--beforeCreate--");
    },
    setup(props, context) {
        // setup的执行顺序是在 beforeCreate 之前
        console.log("--setup--");
        console.log("props=", props, "context=", context);

        const person = reactive({
            name: "tim",
            age: 18,
            job: "frontend",
        });

        function clickAdd() {
            person.age++;
            console.log(person.age);
        }
        function handleHello() {
            context.emit("hello", 666);
        }

        return {
            person,
            clickAdd,
            handleHello,
        };
    },
};
</script>

<style></style>
