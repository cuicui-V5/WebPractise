<template>
    <div class="appGroundSon">
        <h3>{{ msg }}</h3>
        <p>person::{{ person }}</p>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";

let msg = ref("i'm grandSon");

let person = inject("person");

console.log(person);
</script>

<style lang="less" scoped>
.appGroundSon {
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
}
</style>
