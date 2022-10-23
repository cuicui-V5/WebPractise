<template>
    <div class="root">
        <h1>hello world</h1>
        <h2>现在的数字是: {{ num }}</h2>
        <h2>getter: {{ bigNum }}</h2>
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
        <h3>{{ address }}</h3>
        <select v-model.number="step">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increase(step)">+</button>
        <button @click="decrease(step)">-</button>
        <button @click="increaseOdd(step)">奇数+</button>
        <button @click="increaseDelay(step)">延迟+</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            step: 1,
        };
    },
    computed: {
        // mapState的对象写法
        // ...mapState({
        //     name: "name",
        //     age: "age",
        //     address: "address",
        // }),
        // mapState的数组写法
        ...mapState(["num", "name", "age", "address"]),
        ...mapGetters(["bigNum"]),
    },
    methods: {
        ...mapActions(["increaseOdd", "increaseDelay"]),
        ...mapMutations(["increase", "decrease"]),
    },
};
</script>

<style lang="less" scoped>
.root > * {
    margin-left: 10px;
}
</style>
