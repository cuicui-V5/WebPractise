<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <AppSon :p="person" @hello="handler"></AppSon>
    </div>
</template>

<script setup>
import { ref, reactive, provide, isProxy } from "vue";
import AppSon from "./components/AppSon.vue";

let msg = ref("hello iam app");
let test = ref({ a: 1 });
let person = reactive({
    name: "tim",
    age: 17,
});
console.log(isProxy(test));

function handler(val) {
    console.log("hello被触发了", val);
}

provide("person", person);
</script>

<style lang="less" scoped>
.app {
    width: 500px;
    height: 500px;
    background-color: skyblue;
}
</style>
