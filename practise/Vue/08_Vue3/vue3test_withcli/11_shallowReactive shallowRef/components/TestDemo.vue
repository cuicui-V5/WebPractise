<template>
    <h1>当前数字是 {{ num1 }}</h1>
    <button v-on:click="num1++">点我+1</button>
    <h1>当前数字是 {{ num2 }}</h1>
    <button v-on:click="num2++">点我+1</button>

    <h3>{{ person }}</h3>
    <h2>薪水: {{ person.job.j1.money }}</h2>
    <button v-on:click="person.job.j1.money++">点我+1</button>

    <h2>姓名: {{ name }}</h2>
    <button v-on:click="name += '!'">点我+1</button>
    <h2>年龄: {{ age }}</h2>
    <button v-on:click="age++">点我+1</button>
</template>

<script>
import { ref, toRef, toRefs, shallowReactive } from "vue";
export default {
    name: "TestDemo",
    setup() {
        let num1 = ref(0);
        let num2 = ref(0);
        // 浅reactive
        const person = shallowReactive({
            name: "tim",
            age: 18,
            job: {
                j1: {
                    money: 20,
                },
            },
        });
        console.log(toRefs(person));
        console.log(toRef(person, "name"));
        return {
            num1,
            num2,
            person,

            // toRef对单个属性实现引用
            name: toRef(person, "name"),
            age: toRef(person, "age"),
            ...toRefs(person),
        };
    },
};
</script>

<style></style>
