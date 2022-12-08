<template>
    <header>
        <h1>echarts数据可视化</h1>
    </header>
    <section class="container">
        <div class="left">
            <Item>
                <Item1></Item1>
            </Item>
            <Item>
                <Item2></Item2>
            </Item>
        </div>
        <div class="center">
            <mapVue></mapVue>
        </div>
        <div class="right">
            <Item>
                <Item3></Item3>
            </Item>
            <Item>
                <Item4></Item4>
            </Item>
        </div>
    </section>
</template>

<script setup lang="ts">
    import Item from "@/components/item.vue";
    import Item1 from "@/components/item1.vue";
    import Item2 from "@/components/item2.vue";
    import Item3 from "@/components/item3.vue";
    import Item4 from "@/components/item4.vue";
    import mapVue from "@/components/map.vue";
</script>

<style scoped lang="less">
    header {
        height: 5vw;
        background-color: #ced0dc25;
        // backdrop-filter: blur(5px);
        h1 {
            line-height: 5vw;
            font-size: 2vw;
            text-align: center;
        }
    }
    .container {
        border: 2px solid black;
        min-width: 800px;
        max-width: 2560px;
        padding: 1vw 0 0 0;
        background-color: #879aac25;
        // backdrop-filter: blur(5px);
        display: flex;
        .left,
        .right {
            flex: 3;
        }
        .center {
            flex: 5;
        }
    }
</style>
