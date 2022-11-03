<template>
    <TestDemo name="tim" age="18" job="hd" v-on:hello="handler">
        <template v-slot:MySlot>
            <h1>插槽内容</h1>
        </template>
    </TestDemo>
</template>

<script>
import TestDemo from "./components/TestDemo.vue";
export default {
    name: "App",
    components: { TestDemo },
    setup() {
        const handler = function (p) {
            console.log("自定义事件已触发", p);
            alert("自定义事件已触发" + p);
        };
        return { handler };
    },
};
</script>

<style></style>
