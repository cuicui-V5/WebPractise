<template>
    <div>
        <div class="container">
            <h3>地图区域</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { axiosKey } from "@/key";
    import { inject } from "vue";
    const axios = inject(axiosKey);
</script>

<style scoped lang="less">
    .container {
        width: 40vw;
        height: 40vw;
        border: 2px solid black;
        margin: 1vw;
    }
</style>
