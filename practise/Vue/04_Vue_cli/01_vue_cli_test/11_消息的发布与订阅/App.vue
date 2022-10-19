<template>
    <div>
        <MyStudent></MyStudent>
        <MyBrother></MyBrother>
    </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
import MyBrother from "./components/MyBrother.vue";
export default {
    data() {
        return {
            name: "张三",
        };
    },
    components: {
        MyStudent,
        MyBrother,
    },
};
</script>

<style lang="less" scoped></style>
