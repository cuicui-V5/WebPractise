<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="checkAll" />
        </label>
        <span>
            <span>已完成{{ doneCount }}</span>
            / 全部 {{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "TodoFooter",
    props: ["todo", "doneAll", "clearAll"],
    computed: {
        doneCount() {
            return this.todo.reduce((pre, cur) => {
                if (cur.done === true) {
                    pre++;
                    return pre;
                }
                return pre;
            }, 0);
        },
        total() {
            return this.todo.length;
        },
        checkAll: {
            get() {
                return this.doneCount === this.total && this.total > 0;
            },
            set(v) {
                this.doneAll(v);
            },
        },
    },
    methods: {
        changeAll(e) {
            this.doneAll(e.target.checked);
        },
    },
};
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
