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
    import type { EChartsOption } from "echarts/types/dist/shared";

    // 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
    type ECOption = echarts.ComposeOption<
        | BarSeriesOption
        | LineSeriesOption
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
        LabelLayout,
        UniversalTransition,
        CanvasRenderer,
        MarkPointComponent,
        MarkLineComponent,
    ]);
    const ec = ref<HTMLElement | null>(null);
    onMounted(() => {
        const option: EChartsOption = {
            animation: true, // 是否显示动画
            animationThreshold: 10, // 动画阈值, 高于此数量不显示动画
            animationDuration: 2000, //动画持续时间
            animationDelay: 2000, //动画延迟
            animationEasing: "linear", //动画曲线
            title: {
                text: "标题",
                subtext: "副标题",
                // left: "center",
            },
            // 控制图表显示区域及样式
            grid: {
                show: true,
                top: "20%",
                right: "20%",
                backgroundColor: "skyblue",
            },
            tooltip: {
                // 提示框触发方式: item 只有在图形上才会触发, axis在范围内都会触发
                trigger: "axis",
                // 坐标轴指示器 line 线, shadow 阴影, cross , 十字线准星效果
                axisPointer: {
                    type: "cross",
                },
                // 是否显示提示框
                showContent: true,
                // 样式
                backgroundColor: "pink",
                textStyle: {
                    fontSize: "20",
                },
                // 内容格式化
                // formatter: (p) => {
                //     return "value=" + p;
                // },
            },

            // 图例
            legend: {
                // 是否显示图例
                show: true,
                // 图标形状
                icon: "circle",
                // 设置位置
                top: "1%",
            },
            xAxis: {
                type: "value",
            },
            yAxis: {
                type: "category", // 类型. 类目轴
                data: ["1", "2", "3", "4", "5"],
            },

            series: {
                name: "test",
                type: "bar",
                barWidth: "20",
                data: [12, 42, 54, 34, 54],
                markPoint: {
                    data: [
                        {
                            type: "max",
                            name: "最大值",
                        },
                        {
                            type: "min",
                            name: "最xiao值",
                        },
                    ],
                },
                markLine: {
                    data: [
                        {
                            type: "average",
                            name: "平均",
                        },
                    ],
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
