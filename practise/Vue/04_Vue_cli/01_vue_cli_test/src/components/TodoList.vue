<template>
    <ul class="todo-main">
        <TodoItemVue v-for="(item) in todo"
                     :key="item.id"
                     :todo="item"
                     :changeDone="changeDone"
                     :deleteTodo="deleteTodo"></TodoItemVue>
    </ul>
</template>

<script>
import TodoItemVue from "./TodoItem.vue"

export default {
    name: "TodoList",
    components: {
        TodoItemVue
    },
    props: ["todo", "changeDone", "deleteTodo"],
    mounted() {
        console.log(this.todo);
    }
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