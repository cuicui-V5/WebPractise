// 引入Vue核心库
import Vue from "vue";
// 引入vuex
import Vuex from "vuex";

// 应用vuex插件, 注意. 不要放到main.js中, 会造成引入顺序问题
Vue.use(Vuex);

const increaseSpace = {
    namespaced: true,
    actions: {
        increaseOdd(context, val) {
            if (context.state.num % 2 !== 0) {
                context.commit("IncreaseOdd", val);
            }
        },
        increaseDelay(context, val) {
            setTimeout(() => {
                context.commit("IncreaseDelay", val);
            }, 1000);
        },
    },
    mutations: {
        increase(state, value) {
            console.log("mutation被执行了");
            console.log(state, value);
            state.num += value;
        },
        decrease(state, value) {
            console.log("mutation被执行了");
            state.num -= value;
        },
        IncreaseOdd(state, value) {
            state.num += value;
        },
        IncreaseDelay(state, value) {
            state.num += value;
        },
    },
    state: {
        num: 2,
        name: "tim",
        age: 19,
        address: "北京",
    },
    getters: {
        bigNum(state) {
            return state.num * 10;
        },
    },
};
const PersonSpace = {
    namespaced: true,

    state: {
        person: [
            {
                name: "tim1",
                age: 14,
                sex: "male",
            },
            {
                name: "tim2",
                age: 14,
                sex: "male",
            },
            {
                name: "tim3",
                age: 14,
                sex: "male",
            },
        ],
    },
};

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        increaseSpace,
        PersonSpace,
    },
});
