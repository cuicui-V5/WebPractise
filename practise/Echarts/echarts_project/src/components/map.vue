<template>
    <div class="mapChart"></div>
</template>

<script setup lang="ts">
    import { axiosKey, echartsKey } from "@/key";
    import type Echarts from "echarts";
    import type { Axios } from "axios";
    import { inject, onMounted, ref } from "vue";
    import type { EChartsOption } from "echarts";
    const axios = inject(axiosKey) as Axios;
    const chart = inject(echartsKey) as typeof Echarts;

    const mapData = ref();
    // 请求地图数据
    async function getMap() {
        const res = await axios.get("/map/data");
        // console.log(res);
        mapData.value = res.data;
    }
    onMounted(async () => {
        await getMap();
        // console.log(mapData.value);
        chart.registerMap("chinaMap", mapData.value);
        const myChart = chart.init(
            document.querySelector(".mapChart") as HTMLElement,
        );

        const option: EChartsOption = {
            title: {
                text: "地图展示",
                left: "center",
            },
            tooltip: {},
            geo: {
                type: "map",
                map: "chinaMap",
                itemStyle: {
                    areaColor: "#BDE4FF ",
                    borderColor: "#AEA1F0",
                    shadowColor: "#8698D9",
                    shadowBlur: 1,
                },
                emphasis: {
                    itemStyle: {
                        shadowColor: "#8698D9",
                        shadowBlur: 30,
                        areaColor: "#AEA1F0",
                    },
                },
                roam: true,
            },
            visualMap: {
                type: "continuous",
                min: 100,
                max: 5000,
                calculable: true,
            },
            series: {
                type: "scatter",
                color: "#F596FA",
                coordinateSystem: "geo",
                data: [
                    { name: "北京", value: [116.46, 39.92, 4367] },
                    { name: "上海", value: [121.48, 31.22, 8675] },
                    { name: "深圳", value: [114.07, 22.62, 2461] },
                    { name: "广州", value: [113.23, 23.16, 187] },
                    { name: "西安", value: [108.45, 34, 3421] },
                ],
                symbolSize: function (data) {
                    console.log(data);

                    return Math.sqrt(data[2]) / 3;
                },
            },
        };

        myChart.setOption(option);
    });
</script>

<style scoped lang="less">
    .mapChart {
        width: 40vw;
        height: 41vw;
        border: 2px solid black;
        margin: 1vw;
    }
</style>
