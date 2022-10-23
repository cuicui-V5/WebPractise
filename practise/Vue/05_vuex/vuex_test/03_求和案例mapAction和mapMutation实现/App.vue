<template>
    <div id="app">
        <MyIncrease />
    </div>
</template>

<script>
import MyIncrease from "./components/MyIncrease.vue";

export default {
    name: "App",

    components: {
        MyIncrease,
    },
    mounted() {
        console.log(this);
    },
};
</script>

<style></style>
