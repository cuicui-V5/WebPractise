<template>
    <div>
        <ul>
            <li>
                news001
                <input type="text" />
            </li>
            <li>
                news002
                <input type="text" />
            </li>
            <li>
                news003
                <input type="text" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyHome_one",
    beforeDestroy() {
        console.log("destroyed");
    },
};
</script>

<style lang="less" scoped></style>
