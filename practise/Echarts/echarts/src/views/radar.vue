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
    import * as echarts from "echarts/core";
    import {
        BarChart,
        // 系列类型的定义后缀都为 SeriesOption
        type BarSeriesOption,
        LineChart,
        type LineSeriesOption,
        PieChart,
        type PieSeriesOption,
        ScatterChart,
        type ScatterSeriesOption,
        CandlestickChart,
        type CandlestickSeriesOption,
        RadarChart,
        type RadarSeriesOption,
    } from "echarts/charts";
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
        RadarComponent,
        type RadarComponentOption,
    } from "echarts/components";
    import { LabelLayout, UniversalTransition } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import { ref, onMounted } from "vue";

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
        | ScatterSeriesOption
        | CandlestickSeriesOption
        | RadarSeriesOption
        | RadarComponentOption
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
        CandlestickChart,
        PieChart,
        RadarChart,
        ScatterChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer,
        MarkPointComponent,
        MarkLineComponent,
        RadarComponent,
    ]);
    const ec = ref<HTMLElement | null>(null);
    onMounted(() => {
        const option: ECOption = {
            title: {
                text: "标题",
                subtext: "副标题",
                left: "left",
                top: "left",
            },
            tooltip: {},
            radar: [
                {
                    // 形状
                    shape: "polygon",
                    // 半径
                    radius: "60%",
                    // 起始角度
                    startAngle: 200,
                    // 分隔数
                    splitNumber: 10,

                    // 设置维度
                    indicator: [
                        {
                            name: "速度",
                            // 维度的最大值
                            max: 5000,
                        },
                        {
                            name: "护甲",
                            max: 5000,
                        },
                        {
                            name: "生命",
                            max: 5000,
                        },
                        {
                            name: "速度",
                            max: 5000,
                        },
                        {
                            name: "护甲",
                            max: 5000,
                        },
                        {
                            name: "生命",
                            max: 5000,
                        },
                    ],
                },
            ],
            series: {
                name: "test",
                type: "radar",
                areaStyle: {},
                data: [
                    {
                        value: [3344, 3030, 2432, 1235, 3213, 4321],
                    },
                    {
                        value: [3123, 1224, 213, 3453, 1213, 2221],
                    },
                ],
            },
        };
        // 接下来的使用就跟之前一样，初始化图表，设置配置项
        if (ec.value !== null) {
            var myChart = echarts.init(ec.value);
            myChart.setOption(option);
        }
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
    }
</style>
