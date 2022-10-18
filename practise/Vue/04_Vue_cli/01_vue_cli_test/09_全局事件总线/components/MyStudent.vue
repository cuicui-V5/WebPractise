<template>
    <div>
        姓名是: {{ name }}
        <button @click="sendName">点我发送姓名</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "张三",
        };
    },
    methods: {
        sendName() {
            this.$bus.$emit("sendName", this.name);
        },
    },
};
</script>

<style lang="less" scoped></style>
