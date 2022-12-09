<template>
    <div class="chart1">内容</div>
</template>

<script setup lang="ts">
    import type { Axios } from "axios";
    import type { EChartsOption } from "echarts";
    import type Echarts from "echarts";

    import { inject, onMounted, ref, computed, type Ref } from "vue";
    import { echartsKey, axiosKey } from "../key";

    // 定义数据类型
    type one = {
        chartData: [{ title: string; num: number }];
    };

    // 依赖注入
    const chart = inject(echartsKey) as typeof Echarts;
    const axios = inject(axiosKey) as Axios;
    // 获取数据的异步函数
    async function getChart1data() {
        let res = await axios.get("/one/data");
        // console.log(res);
        data.value = res.data;
    }
    // 获取的数据
    const data = ref<one>() as Ref<one>;
    // 计算出来x轴数据
    const xData = computed(() => {
        return data.value.chartData.map((v) => v.title);
    });
    // 计算出来y轴数据
    const yData = computed(() => {
        return data.value.chartData.map((v) => v.num);
    });

    onMounted(async () => {
        await getChart1data();
        // console.log(data.value);
        // console.log(xData);
        // console.log(yData);

        let container = document.querySelector(".chart1") as HTMLElement;
        // console.log(container);

        const myChart = chart.init(container, "light");
        const option: EChartsOption = {
            tooltip: {},

            title: {
                text: "销售总量",
                top: "3%",
                left: "center",
            },
            xAxis: {
                type: "value",
            },
            yAxis: {
                type: "category",
                data: xData.value,
                nameTextStyle: {
                    fontSize: 12,
                },
            },
            grid: {
                top: "12%",
                bottom: "3%",
                left: "10%",
                right: "15%",
                containLabel: true,
            },
            series: {
                data: yData.value,
                itemStyle: {
                    borderRadius: 20,
                    color: new chart.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: "#9AEBA3",
                        },
                        {
                            offset: 0.5,
                            color: "#45C4B0",
                        },
                        {
                            offset: 1,
                            color: "#13678A",
                        },
                    ]),
                },
                type: "bar",
            },
        };
        myChart.setOption(option);
    });
</script>

<style scoped>
    .chart1 {
        width: 100%;
        height: 100%;
    }
</style>
