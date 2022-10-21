<template>
    <div class="cate">
        <h1>插槽测试</h1>
        <slot name="game" :games="games" :users="users">插槽默认内容</slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            games: ["ow2", "r6", "pubg", "lol"],
            users: ["tim", "tim2", "tim3"],
        };
    },
};
</script>

<style lang="less" scoped>
.cate {
    width: 200px;
    height: 300px;
    background-color: skyblue;
}
</style>
