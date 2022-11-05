<template>
    <button @click="isShow = true">弹窗</button>
    <Teleport to="body">
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h1>这是弹窗</h1>
                <ul>
                    <li>123123</li>
                    <li>123123</li>
                    <li>123123</li>
                    <li>123123</li>
                </ul>
                <button @click="isShow = false">关闭弹窗</button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";

let isShow = ref(false);
</script>

<style lang="less" scoped>
.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.32);
    .dialog {
        text-align: center;
        background-color: skyblue;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
