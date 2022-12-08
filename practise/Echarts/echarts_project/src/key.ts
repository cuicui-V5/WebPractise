import type { InjectionKey } from "vue";
import type Echarts from "echarts";
import type { Axios } from "axios";

export const echartsKey = Symbol() as InjectionKey<typeof Echarts>;
export const axiosKey = Symbol() as InjectionKey<Axios>;
