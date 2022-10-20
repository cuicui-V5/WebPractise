<template>
    <ul class="todo-main">
        <transition-group appear name="todo">
            <TodoItemVue v-for="item in todo" :key="item.id" :todo="item"></TodoItemVue>
        </transition-group>
    </ul>
</template>

<script>
import TodoItemVue from "./TodoItem.vue";

export default {
    name: "TodoList",
    components: {
        TodoItemVue,
    },
    props: ["todo"],
    mounted() {
        console.log(this.todo);
    },
};
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

.todo-enter,
.todo-leave-to {
    transform: translateX(100%);
}
.todo-leave,
.todo-enter-to {
    transform: translateX(0);
}
.todo-enter-active,
.todo-leave-active {
    transition: 0.2s;
}
</style>
