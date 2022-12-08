<template>
    <header>
        <h1>echarts数据可视化</h1>
    </header>
    <section class="container">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
    header {
        height: 5vw;
        background-color: #ced0dc25;
        backdrop-filter: blur(50%);
        h1 {
            line-height: 5vw;
            font-size: 2vw;
            text-align: center;
        }
    }
    .container {
        border: 2px solid black;
        min-width: 1200px;
        max-width: 2560px;
        padding: 1vw 0 0 0;
        background-color: skyblue;
        display: flex;
        .left,
        .right {
            flex: 3;
        }
        .center {
            flex: 5;
        }
    }
</style>
