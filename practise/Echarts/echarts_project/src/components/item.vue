<template>
    <div class="item">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
    .item {
        background-color: #bcc5ce5b;
        width: 20vw;
        height: 20vw;
        border: black 2px solid;
        margin: 1vw;
    }
</style>
