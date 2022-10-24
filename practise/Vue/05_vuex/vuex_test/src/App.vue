<template>
    <div id="app">
        <MyIncrease />
        <MyIncrease2 />
    </div>
</template>

<script>
import MyIncrease from "./components/MyIncrease.vue";
import MyIncrease2 from "./components/PerSonList.vue";

export default {
    name: "App",

    components: {
        MyIncrease,
        MyIncrease2,
    },
    mounted() {
        console.log(this);
    },
};
</script>

<style></style>
