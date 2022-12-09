<template>
    <div>
        <h2>图标1</h2>
        <div class="abc">内容</div>
    </div>
</template>

<script setup lang="ts">
    import type { Axios } from "axios";
    import type { EChartsOption } from "echarts";
    import type Echarts from "echarts";

    import { inject, onMounted, ref, computed, type Ref } from "vue";
    import { echartsKey, axiosKey } from "../key";
    type one = {
        chartData: [{ title: string; num: number }];
    };
    const chart = inject(echartsKey) as typeof Echarts;
    const axios = inject(axiosKey) as Axios;
    async function getData() {
        let res = await axios.get("/one/data");
        console.log(res);
        data.value = res.data;
    }
    // 获取的数据
    const data = ref<one>() as Ref<one>;
    // 计算出来x轴数据
    const xdata = computed(() => {
        return data.value.chartData.map((v) => v.title);
    });
    // 计算出来y轴数据
    const ydata = computed(() => {
        return data.value.chartData.map((v) => v.num);
    });
    onMounted(async () => {
        await getData();
        console.log(data.value);
        console.log(xdata);
        console.log(ydata);

        let container = document.querySelector(".abc") as HTMLElement;
        // console.log(container);

        const myChart = chart.init(container, "light");
        const option: EChartsOption = {
            tooltip: {},
            title: {
                text: "test",
            },
            xAxis: {
                data: xdata.value,
            },
            yAxis: {},
            series: {
                data: ydata.value,
                type: "bar",
            },
        };
        myChart.setOption(option);
    });
</script>

<style scoped>
    .abc {
        width: 100%;
        height: 20vw;
    }
</style>
