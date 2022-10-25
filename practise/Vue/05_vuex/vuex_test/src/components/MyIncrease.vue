<template>
    <div class="root">
        <hr />
        <h1>组件1</h1>
        <h1>hello world</h1>
        <h2>组件2 的person共有: {{ person.length }}</h2>
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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            step: 1,
        };
    },
    computed: {
        ...mapState("increaseSpace", ["num", "name", "age", "address", "person"]),
        ...mapState("PersonSpace", ["person"]),
        // ...mapGetters("increaseSpace", ["bigNum"]),
        bigNum() {
            return this.$store.getters["increaseSpace/bigNum"];
        },
    },
    methods: {
        ...mapActions("increaseSpace", ["increaseOdd", "increaseDelay"]),
        ...mapMutations("increaseSpace", ["increase", "decrease"]),
    },
};
</script>

<style lang="less" scoped>
.root > * {
    margin-left: 10px;
}
</style>
