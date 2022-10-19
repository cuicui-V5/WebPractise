<template>
    <div>获取的传过来的学生姓名是: {{ name }}</div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    data() {
        return {
            name: "",
        };
    },
    mounted() {
        // 订阅消息
        this.pid = pubsub.subscribe("sendName", (msgName, msg) => {
            console.log(msgName, msg);
            console.log(this);
            this.name = msg;
        });
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pid);
    },
};
</script>

<style lang="less" scoped></style>
