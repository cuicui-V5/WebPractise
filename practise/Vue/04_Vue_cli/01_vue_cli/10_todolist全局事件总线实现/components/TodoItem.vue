<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="change" />
            <span>{{ todo.thing }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo">删除</button>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    data() {
        return {
            flag: true,
        };
    },
    props: ["todo"],
    methods: {
        change() {
            this.$bus.$emit("changeDone", this.todo.id);
        },
        deleteTodo() {
            this.$bus.$emit("deleteTodo", this.todo.id);
        },
    },
};
</script>

<style lang="less" scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover button {
    display: block;
}

li:hover {
    background-color: rgba(153, 153, 153, 0.116);
}
</style>
