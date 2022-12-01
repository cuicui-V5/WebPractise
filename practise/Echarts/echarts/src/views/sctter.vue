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
    } from "echarts/components";
    import { LabelLayout, UniversalTransition } from "echarts/features";
    import { CanvasRenderer } from "echarts/renderers";
    import { ref, onMounted } from "vue";
    import { color } from "echarts/core";

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
        ScatterChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer,
        MarkPointComponent,
        MarkLineComponent,
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
            legend: {
                orient: "vertical",
            },
            xAxis: {},
            yAxis: {},
            series: {
                name: "test",
                type: "scatter",
                data: [
                    [1, 3],
                    [2, 5],
                    [5, 3],
                    [6, 5],
                    [5, 2],
                    [4, 4],
                    [6, 4],
                    [2, 4],
                    [6, 6],
                ],
                symbolSize: 50, // 散点图图形大小
                // 散点图图形样式
                color: {
                    // 线性渐变
                    type: "pattern",
                    x: 0,
                    x2: 1,
                    y: 1,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: "#fb7299" },
                        { offset: 1, color: "#0288d1" },
                    ],
                },
                emphasis: {
                    // focus: "self",
                    itemStyle: {
                        borderColor: "red",
                        borderWidth: 5,
                    },
                },
                // 是否显示文本标签
                label: {
                    show: true, // 是否显示文本标签
                    position: "inside",
                },
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
