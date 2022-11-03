<template>
    <h1>welcome to vue3</h1>
    <label for="">姓</label>
    <input type="text" name="" id="" v-model="person.firstName" />
    <br />
    <label for="">名</label>
    <input type="text" name="" id="" v-model="person.lastName" />
    <br />
    <label for="">全名</label>
    <input type="text" name="" id="" v-model="person.fullName" />
    <br />

    <button @click="clickAdd">点我+1 age={{ person.age }}</button>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    name: "TestDemo",
    beforeCreate() {
        console.log("--beforeCreate--");
    },
    setup() {
        // setup的执行顺序是在 beforeCreate 之前
        console.log("--setup--");

        const person = reactive({
            firstName: "tim",
            lastName: "cook",
            age: 18,
            job: "frontend",
        });

        // 计算属性简写形式, 只需要读取不需要修改
        // person.fullName = computed(() => {
        //     return person.firstName + "-" + person.lastName;
        // });

        // 计算属性对象形式
        person.fullName = computed({
            get() {
                return person.firstName + "-" + person.lastName;
            },
            set(val) {
                const nameArr = val.split("-");
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            },
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
