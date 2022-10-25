<template>
    <div class="root">
        <hr />
        <h1>组件2</h1>
        <h2>组件 1 的的数字是: {{ num }}</h2>
        <h3>人员信息:</h3>
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="(item, index) in person" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
    data() {
        return {
            step: 1,
        };
    },
    computed: {
        num() {
            return this.$store.state.increaseSpace.num;
        },
        person() {
            return this.$store.state.PersonSpace.person;
        },
        // ...mapState("increaseSpace", ["num"]),
        // ...mapState("PersonSpace", ["person"]),
    },
    methods: {
        addPerson() {
            this.$store.dispatch("PersonSpace/addPerson");
        },
    },
};
</script>

<style lang="less" scoped>
.root > * {
    margin-left: 10px;
}
</style>
