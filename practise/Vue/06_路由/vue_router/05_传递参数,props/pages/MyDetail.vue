<template>
    <div>
        <h1>detail</h1>
        <ul>
            <li>编号: {{ id }} tittle: {{ tittle }}:</li>
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
    props: ["id", "tittle"],
};
</script>

<style lang="less" scoped></style>
