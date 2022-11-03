<template>
    <h1>当前数字是 {{ num1 }}</h1>
    <button v-on:click="num1++">点我+1</button>
    <h1>当前数字是 {{ num2 }}</h1>
    <button v-on:click="num2++">点我+1</button>
    <h1>当前数字是 {{ num3 }}</h1>
    <button v-on:click="num3++">点我+1</button>
    <h1>当前数字是 {{ num4 }}</h1>
    <button v-on:click="num4++">点我+1</button>

    <h1>姓名 {{ p.name }}</h1>
    <button v-on:click="p.name += '!'">点我+1</button>
    <h1>年龄 {{ p.age }}</h1>
    <button v-on:click="p.age++">点我+1</button>
</template>

<script>
import { ref, watchEffect, reactive } from "vue";
export default {
    name: "TestDemo",
    setup() {
        let num1 = ref(0);
        let num2 = ref(0);
        let num3 = ref(0);
        let num4 = ref(0);

        let p = reactive({
            name: "tim",
            age: 18,
        });
        watchEffect(() => {
            console.log("数字改变了", num1.value, num2.value, num3.value, num4.value);
            console.log("数字改变了", p.name, p.age);
        });

        return {
            num1,
            num2,
            num3,
            num4,
            p,
        };
    },
};
</script>

<style></style>
