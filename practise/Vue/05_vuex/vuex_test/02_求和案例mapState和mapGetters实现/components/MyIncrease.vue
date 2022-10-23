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
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseOdd">奇数+</button>
        <button @click="increaseDelay">延迟+</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

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
        increase() {
            this.$store.commit("increase", this.step);
        },
        decrease() {
            this.$store.commit("decrease", this.step);
        },
        increaseOdd() {
            this.$store.dispatch("increaseOdd", this.step);
        },
        increaseDelay() {
            this.$store.dispatch("increaseDelay", this.step);
        },
    },
};
</script>

<style lang="less" scoped>
.root > * {
    margin-left: 10px;
}
</style>
