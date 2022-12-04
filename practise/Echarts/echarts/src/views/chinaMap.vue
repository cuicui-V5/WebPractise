<template>
    <div class="about">
        <!-- echarts的容器, 必须设置宽高, 否则不显示 -->
        <div
            class="echarts"
            ref="ec"
        ></div>
    </div>
</template>
<script lang="ts" setup>
    import axios from "axios";
    import * as echarts from "echarts/core";
    // 导入图表与图表的series option定义
    // 用到什么图表就导入什么图表
    import {
        BarChart,
        type BarSeriesOption,
        LineChart,
        type LineSeriesOption,
        PieChart,
        type PieSeriesOption,
        TreeChart,
        type TreeSeriesOption,
        MapChart,
        type MapSeriesOption,
        ScatterChart,
        type ScatterSeriesOption,
    } from "echarts/charts";
    // 导入用到的组件
    import {
        TitleComponent,
        // 组件类型的定义后缀都为 ComponentOption
        type TitleComponentOption,
        TooltipComponent,
        type TooltipComponentOption,
        GridComponent,
        type GridComponentOption,
        // 数据集组件
        DatasetComponent,
        type DatasetComponentOption,
        // 内置数据转换器组件 (filter, sort)
        TransformComponent,
        type LegendComponentOption,
        LegendComponent,
        MarkPointComponent,
        type MarkPointComponentOption,
        MarkLineComponent,
        type MarkLineComponentOption,
        GeoComponent,
        type GeoComponentOption,
    } from "echarts/components";
    import { LabelLayout, UniversalTransition } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import { ref, onMounted } from "vue";
    import type { ECharts } from "echarts/core";

    // 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
    type ECOption = echarts.ComposeOption<
        | BarSeriesOption
        | LineSeriesOption
        | PieSeriesOption
        | TitleComponentOption
        | TooltipComponentOption
        | GridComponentOption
        | DatasetComponentOption
        | LegendComponentOption
        | MarkPointComponentOption
        | MarkLineComponentOption
        | TreeSeriesOption
        | MapSeriesOption
        | GeoComponentOption
        | ScatterSeriesOption
    >;
    // 注册必须的组件
    echarts.use([
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        BarChart,
        LineChart,
        PieChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer,
        MarkPointComponent,
        MarkLineComponent,
        TreeChart,
        MapChart,
        GeoComponent,
        ScatterChart,
    ]);
    const ec = ref<HTMLElement | null>(null);
    const ecData = ref<any>({});
    let myChart: ECharts;
    async function getMap() {
        myChart.showLoading();
        let { data: mapData }: any = await axios.get(
            "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
        );
        console.log(mapData);
        ecData.value = mapData;
    }
    onMounted(() => {
        if (ec.value !== null) {
            myChart = echarts.init(ec.value, "light");
        }
        getMap().then(() => {
            myChart.hideLoading();
            echarts.registerMap("chinaMap", ecData.value);
            const option: ECOption = {
                tooltip: {},
                geo: {
                    type: "map",
                    map: "chinaMap",
                    // 可进行拖动缩放
                    roam: true,
                    // 初始缩放
                    zoom: 1.5,
                    // 初始中心
                    center: [105.4, 33.99],
                    label: {
                        show: false,
                        position: "inside",
                    },
                    itemStyle: {
                        color: "pink",
                    },
                },
                series: {
                    type: "scatter",
                    // 按照什么来绘制散点图
                    coordinateSystem: "geo",
                    data: [
                        {
                            name: "北京",
                            value: [108.5, 34.5],
                            symbolSize: 50,
                        },
                        {
                            name: "广州",
                            value: [118.5, 37.5],
                            symbolSize: 30,
                        },
                    ],
                },
            };
            // 接下来的使用就跟之前一样，初始化图表，设置配置项

            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        });
    });
</script>

<style lang="scss">
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    }
    .echarts {
        width: 100%;
        height: 600px;
        border: 2px solid skyblue;
    }
</style>
