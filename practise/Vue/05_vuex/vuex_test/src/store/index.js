// 引入Vue核心库
import Vue from "vue";
// 引入vuex
import Vuex from "vuex";

// 应用vuex插件, 注意. 不要放到main.js中, 会造成引入顺序问题
Vue.use(Vuex);

// 准备actions;,mutations,state对象
const actions = {
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
};
const mutations = {
    increase(state, value) {
        console.log("mutation被执行了");
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
};
const state = {
    num: 2,
};

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
});
