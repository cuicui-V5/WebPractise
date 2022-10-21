<template>
    <div class="cate">
        <h1>插槽测试</h1>
        <slot>插槽默认内容</slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.cate {
    width: 200px;
    height: 300px;
    background-color: skyblue;
}
</style>
