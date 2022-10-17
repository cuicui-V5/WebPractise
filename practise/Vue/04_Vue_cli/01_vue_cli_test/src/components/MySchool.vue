<template>
    <div>
        <h1 id="school">学校名称是 {{ name }}</h1>
        <button @click="emit">点我触发事件</button>
        <button @click="unbind">点我解绑事件</button>
    </div>
</template>

<script>
export default {
    name: "MySchool",
    data() {
        return {
            name: "xx小学",
        };
    },
    methods: {
        emit() {
            this.$emit("myEvent", "hello");
        },
        unbind() {
            this.$off("myEvent");
        },
    },
};
</script>

<style>
#school {
    color: violet;

    font-size: 20px;
}
</style>
