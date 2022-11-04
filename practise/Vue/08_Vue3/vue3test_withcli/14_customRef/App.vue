<template>
    <div>
        <h1>自定义ref测试</h1>
        <input type="text" name="" id="" v-model="keyWord" />
        <h1>{{ keyWord }}</h1>
    </div>
</template>

<script>
import { customRef } from "vue";
export default {
    setup() {
        let keyWord = myRef("hello");
        let timer;
        function myRef(val) {
            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log("有人读取了myRef", val);
                        // 让get追踪val值的变化
                        track();
                        return val;
                    },
                    set(newVal) {
                        console.log("有人设置了myRef", newVal);
                        val = newVal;
                        // 使用防抖策略
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            // 通知vue更新页面
                            trigger();
                        }, 600);
                    },
                };
            });
        }

        return {
            keyWord,
        };
    },
};
</script>

<style lang="less" scoped></style>
