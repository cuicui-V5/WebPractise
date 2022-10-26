<template>
    <div>
        <ul>
            <li>编号: {{ this.$route.query.id }} tittle: {{ this.$route.query.tittle }}:</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route);
    },
    beforeDestroy() {
        console.log("destroyed");
    },
};
</script>

<style lang="less" scoped></style>
