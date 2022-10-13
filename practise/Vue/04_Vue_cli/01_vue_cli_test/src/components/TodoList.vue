<template>
    <ul class="todo-main">
        <TodoItemVue v-for="(item) in todo"
                     :key="item.id"
                     :todo="item"></TodoItemVue>
    </ul>
</template>

<script>
import TodoItemVue from "./TodoItem.vue"

export default {
    name: "TodoList",
    components: {
        TodoItemVue
    },
    data() {
        return {
            todo: [{
                id: "001",
                thing: "吃饭",
                done: false
            }, {
                id: "002",
                thing: "睡觉",
                done: false
            }, {
                id: "003",
                thing: "写代码",
                done: true
            },
            ]
        }
    },
}
</script>

<style lang="less" scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>