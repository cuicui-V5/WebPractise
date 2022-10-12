import { mixin } from "../components/mixin";

export const plugin = {
    install(Vue) {
        //添加全局过滤器
        Vue.filter("myFilter", function (val) {
            return "处理后" + val;
        });

        //添加全局指令
        Vue.directive();

        // 添加全局混入
        Vue.mixin(mixin);

        // 添加实例方法
        Vue.prototype.myMethod = () => {
            console.log("method");
        };
    },
};
