<template>
    <div class="chart3">内容</div>
</template>

<script setup lang="ts">
    import { axiosKey, echartsKey } from "@/key";
    import type Echarts from "echarts";
    import type { Axios } from "axios";
    import { inject, onMounted, ref } from "vue";
    import type { EChartsOption } from "echarts";
    const axios = inject(axiosKey) as Axios;
    const chart = inject(echartsKey) as typeof Echarts;

    const chart3data = ref();
    // 请求图表数据
    async function getChart3Data() {
        const res = await axios.get("/three/data");
        // console.log(res);
        chart3data.value = res.data;
    }

    onMounted(async () => {
        await getChart3Data();
        // console.log(chart3data.value);
        const myChart = chart.init(
            document.querySelector(".chart3") as HTMLElement,
        );
        const option: EChartsOption = {
            title: {
                text: "库存统计",
                left: "center",
            },
            tooltip: {},
            legend: {
                bottom: "bottom",
            },
            series: {
                type: "pie",
                data: chart3data.value.chartData,
                radius: ["10%", "50%"],
                center: ["50%", "45%"],
                roseType: "radius",
                itemStyle: {
                    borderRadius: "10%",
                },
            },
        };
        myChart.setOption(option);
    });
</script>

<style scoped>
    .chart3 {
        width: 100%;
        height: 100%;
    }
</style>
