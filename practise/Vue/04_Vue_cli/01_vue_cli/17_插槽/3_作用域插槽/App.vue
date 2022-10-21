<template>
    <div id="app">
        <MyCategory>
            <!-- 淘汰的slop写法 -->
            <template slot="game" scope="scopeData">
                <ul>
                    <li v-for="(item, index) in scopeData.games" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </template>
        </MyCategory>
        <MyCategory>
            <!-- 新写法 -->
            <template v-slot:game="{ users }">
                <ul>
                    <li v-for="(item, index) in users" :key="index">{{ item }}</li>
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
};
</script>

<style lang="less">
#app {
    display: flex;
    justify-content: space-around;
}
</style>
