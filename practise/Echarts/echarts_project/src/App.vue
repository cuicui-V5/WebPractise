<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
    import { provide } from "vue";
    import * as echarts from "echarts";
    import axios from "axios";
    import { echartsKey, axiosKey } from "./key";

    axios.defaults.baseURL = "http://127.0.0.1:1234";
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
