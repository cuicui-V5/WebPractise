<template>
    <div class="appSon">
        <h1>{{ msg }}</h1>
        <p>人员信息是: {{ p.name }}</p>
        <p>人员信息是: {{ p.age }}</p>
        <button @click="chufa">点我触发hello</button>
        <Suspense>
            <template v-slot:default>
                <AppGrandSon></AppGrandSon>
            </template>
            <template v-slot:fallback>
                <h1>加载中请稍后</h1>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineAsyncComponent } from "vue";
// import AppGrandSon from "./appGrandSon.vue";
const AppGrandSon = defineAsyncComponent(() => import("./appGrandSon.vue"));

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
