<template>
    <h1>welcome to vue3</h1>
    <h2>name:{{ name }}</h2>
    <h2>name:{{ age }}</h2>
</template>

<script>
export default {
    name: "App",
    components: {},
    setup() {
        let name = "tim";
        let age = 18;
        return {
            name,
            age,
        };
    },
};
</script>

<style></style>
