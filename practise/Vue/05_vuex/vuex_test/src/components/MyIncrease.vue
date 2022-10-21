<template>
    <div class="root">
        <h1>hello world</h1>
        <h2>现在的数字是: {{ num }}</h2>
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
export default {
    data() {
        return {
            num: 0,
            step: 1,
        };
    },
    methods: {
        increase() {
            this.num += this.step;
        },
        decrease() {
            this.num -= this.step;
        },
        increaseOdd() {
            if (this.num % 2 !== 0) {
                this.num += this.step;
            }
        },
        increaseDelay() {
            setTimeout(() => {
                this.num += this.step;
            }, 1000);
        },
    },
};
</script>

<style lang="less" scoped>
.root > * {
    margin-left: 10px;
}
</style>
