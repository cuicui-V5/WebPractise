<template>
    <div class="chart4">内容</div>
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
        let res = await axios.get("/four/data");
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

        let container = document.querySelector(".chart4") as HTMLElement;

        const myChart = chart.init(container, "light");
        const option: EChartsOption = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    shadowStyle: {
                        color: "#5470c6",
                        opacity: 0.2,
                    },
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
                left: "4%",
                right: "7%",
                containLabel: true,
            },
            series: [
                {
                    name: "数码",
                    data: yData.value.Chemicals,

                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                    label: {
                        show: true,
                    },
                },
                {
                    name: "美食",

                    data: yData.value.Clothes,
                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                    label: {
                        show: true,
                    },
                },
                {
                    name: "服饰",

                    data: yData.value.Electrical,
                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                    label: {
                        show: true,
                    },
                },
                {
                    name: "家电",
                    data: yData.value.digit,
                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                    label: {
                        show: true,
                    },
                },
                {
                    name: "美妆",

                    data: yData.value.gear,
                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        opacity: 0.8,
                    },
                    stack: "total",
                    label: {
                        show: true,
                    },
                },
            ],
        };
        myChart.setOption(option);
    });
</script>
<style scoped>
    .chart4 {
        width: 100%;
        height: 100%;
    }
</style>
