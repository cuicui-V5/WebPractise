<template>
    <h1>当前数字是 {{ num1 }}</h1>
    <button v-on:click="num1++">点我+1</button>
    <h1>当前数字是 {{ num2 }}</h1>
    <button v-on:click="num2++">点我+1</button>

    <h2>薪水: {{ person.job.j1.money }}</h2>
    <button v-on:click="person.job.j1.money++">点我+1</button>

    <h2>姓名: {{ person.name }}</h2>
    <button v-on:click="person.name += '!'">点我+1</button>
    <h2>年龄: {{ person.age }}</h2>
    <button v-on:click="person.age++">点我+1</button>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
    name: "TestDemo",
    setup() {
        let num1 = ref(0);
        let num2 = ref(0);

        const person = reactive({
            name: "tim",
            age: 18,
            job: {
                j1: {
                    money: 20,
                },
            },
        });
        // 1. 监视单个ref类型的数据
        // watch(
        //     num1,
        //     (newVal, oldVal) => {
        //         console.log("数据发生改变", newVal, oldVal);
        //     },
        //     { immediate: true }
        // );

        // 2. 监视多个ref数据, 放进数组内
        // watch(
        //     [num1, num2],
        //     (newValArr, oldValArr) => {
        //         console.log("数据发生改变", newValArr, oldValArr);
        //     },
        //     { immediate: true }
        // );

        // 3. 监视reactive对象内全部数据
        // 注意: 无法获取oldVal, 强制开启了深度监视
        watch(person, (newVal, oldVal) => {
            console.log("person发生改变", newVal, oldVal);
        });

        // 4. 监视reactive对象内某个属性, 将该属性写入函数内! 注意: 此时可以获取oldVal
        // watch(
        //     () => person.name,
        //     (newVal, oldVal) => {
        //         console.log("person发生改变", newVal, oldVal);
        //     }
        // );

        // 5.监视reactive对象内某些属性, 将包含该属性的函数放入一个数组内, 注意: 此时可以获取oldVal
        // watch([() => person.name, () => person.age], (newVal, oldVal) => {
        //     console.log("person发生改变", newVal, oldVal);
        // });

        return {
            num1,
            num2,
            person,
        };
    },
};
</script>

<style></style>
