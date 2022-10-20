<template>
    <div>
        姓名是: {{ name }}
        <button @click="sendName">点我发送姓名</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
    data() {
        return {
            name: "张三",
        };
    },
    methods: {
        sendName() {
            pubsub.publish("sendName", this.name);
        },
    },
};
</script>

<style lang="less" scoped></style>
