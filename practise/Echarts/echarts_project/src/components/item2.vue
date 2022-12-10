<template>
    <div class="chart2">内容</div>
</template>

<script setup lang="ts">
    import type { Axios } from "axios";
    import type { EChartsOption } from "echarts";
    import type Echarts from "echarts";

    import { inject, onMounted, ref, computed, type Ref } from "vue";
    import { echartsKey, axiosKey } from "../key";

    // 定义数据类型
    type two = {
        chartData: {
            day: Array<string>;
            num: {
                Clothes: Array<number>;
                digit: Array<number>;
                Electrical: Array<number>;
                gear: Array<number>;
                Chemicals: Array<number>;
            };
        };
    };

    // 依赖注入
    const chart = inject(echartsKey) as typeof Echarts;
    const axios = inject(axiosKey) as Axios;
    // 获取数据的异步函数
    async function getChart1data() {
        let res = await axios.get("/two/data");
        // console.log(res);
        data.value = res.data;
    }
    // 获取的数据
    const data = ref() as Ref<two>;
    // 计算出来x轴数据
    const xData = computed(() => {
        return data.value.chartData.day;
    });
    // 计算出来y轴数据
    const yData = computed(() => {
        return data.value.chartData.num;
    });

    onMounted(async () => {
        await getChart1data();
        console.log(data.value.chartData);

        let container = document.querySelector(".chart2") as HTMLElement;

        const myChart = chart.init(container, "light");
        const option: EChartsOption = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "orange",
                    },
                },
            },
            legend: {
                top: "12%",
                data: ["数码", "美食", "服饰", "家电", "美妆"],
            },

            title: {
                text: "周销量",
                top: "3%",
                left: "center",
            },
            xAxis: {
                boundaryGap: false,
                type: "category",

                data: xData.value,
            },
            yAxis: {
                type: "value",
            },
            grid: {
                top: "30%",
                bottom: "3%",
                left: "3%",
                right: "7%",
                containLabel: true,
            },
            series: [
                {
                    name: "数码",
                    data: yData.value.Chemicals,

                    areaStyle: {},
                    type: "line",
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                },
                {
                    name: "美食",

                    data: yData.value.Clothes,
                    areaStyle: {},
                    type: "line",
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                },
                {
                    name: "服饰",

                    data: yData.value.Electrical,
                    areaStyle: {},
                    type: "line",
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                },
                {
                    name: "家电",
                    data: yData.value.digit,
                    areaStyle: {},
                    type: "line",
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                },
                {
                    name: "美妆",

                    data: yData.value.gear,
                    areaStyle: {},
                    type: "line",
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 0,
                    },
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                },
            ],
        };
        myChart.setOption(option);
    });
</script>
<style scoped>
    .chart2 {
        width: 100%;
        height: 100%;
    }
</style>
