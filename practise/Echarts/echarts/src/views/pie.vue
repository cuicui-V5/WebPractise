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
    import { shine } from "../assets/shine";

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
            series: {
                name: "test",
                type: "pie",
                data: [
                    { value: 10, name: "吃饭" },
                    { value: 20, name: "睡觉" },
                    { value: 30, name: "打飞机" },
                    { value: 40, name: "玩电脑" },
                    { value: 50, name: "喝水" },
                ],

                // 设置内外半径
                // 第一个参数表示外圈占容器总宽度的比例,
                // 第二个参数表示内部空白区域占容器宽度的比例, 第一个参数必须小于第二个参数
                radius: ["20%", "70%"],
                // 是否设置成玫瑰图
                roseType: "area",
                itemStyle: {
                    borderRadius: "10",
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
            var myChart = echarts.init(ec.value, shine);
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
