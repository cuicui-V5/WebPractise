<template>
    <div>获取的传过来的学生姓名是: {{ name }}</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
        };
    },
    mounted() {
        this.$bus.$on("sendName", this.sendName);
    },
    beforeDestroy() {
        this.$bus.$off("sendName");
    },
    methods: {
        sendName(val) {
            console.log(val);
            this.name = val;
        },
    },
};
</script>

<style lang="less" scoped></style>
