<template>
    <div>
        <h2>图标1</h2>
        <div class="abc">内容</div>
    </div>
</template>

<script setup lang="ts">
    import type { EChartsOption } from "echarts";
    import type Echarts from "echarts";

    import { inject, onMounted } from "vue";
    import { echartsKey, axiosKey } from "../key";

    const chart = inject<typeof Echarts>(echartsKey);

    const axios = inject(axiosKey);
    onMounted(() => {
        let container = document.querySelector(".abc") as HTMLElement;
        console.log(container);

        const myChart = chart?.init(container, "dark");
        const option: EChartsOption = {
            title: {
                text: "test",
            },
            xAxis: {},
            yAxis: {},
            series: {
                data: [1, 2, 3, 4],
                type: "bar",
            },
        };
        myChart?.setOption(option);
    });
</script>

<style scoped>
    .abc {
        width: 100%;
        height: 20vw;
    }
</style>
