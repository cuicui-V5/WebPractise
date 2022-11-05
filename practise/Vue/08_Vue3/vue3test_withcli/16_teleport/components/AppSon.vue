<template>
    <div class="appSon">
        <h1>{{ msg }}</h1>
        <p>人员信息是: {{ p.name }}</p>
        <p>人员信息是: {{ p.age }}</p>
        <button @click="chufa">点我触发hello</button>
        <AppGrandSon></AppGrandSon>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import AppGrandSon from "./appGrandSon.vue";

let msg = ref("i'm son");

defineProps(["p"]);

let emit = defineEmits(["hello"]);

function chufa() {
    emit("hello", 666);
}
</script>

<style lang="less" scoped>
.appSon {
    width: 300px;
    height: 300px;
    background-color: rgb(165, 119, 119);
}
</style>
