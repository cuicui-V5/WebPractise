<template>
    <div id="app">
        <MyCategory>
            <ul slot="game">
                <li v-for="(item, index) in games" :key="index">{{ item }}</li>
            </ul>
        </MyCategory>
        <MyCategory>
            <template v-slot:game>
                <ul>
                    <li v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
export default {
    components: {
        MyCategory,
    },
    data() {
        return {
            games: ["ow2", "r6", "pubg", "lol"],
        };
    },
};
</script>

<style lang="less">
#app {
    display: flex;
    justify-content: space-around;
}
</style>
