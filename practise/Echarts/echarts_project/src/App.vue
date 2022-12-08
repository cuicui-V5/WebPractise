<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
    import { provide } from "vue";
    import * as echarts from "echarts";
    import axios from "axios";
    import { echartsKey, axiosKey } from "./key";

    console.log(echarts);

    provide(echartsKey, echarts);
    provide(axiosKey, axios);
</script>

<template>
    <RouterView />
</template>
<style lang="less">
    * {
        box-sizing: border-box;
    }
    body {
        // background-image: url(./assets/bg.jpg);
        background-color: skyblue;
        background-size: cover;
    }
</style>
