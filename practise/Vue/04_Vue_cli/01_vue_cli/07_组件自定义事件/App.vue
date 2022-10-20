<template>
    <div>
        <h1>hello Vue!</h1>
        <!-- 第一种绑定事件的方法, 直接绑定 -->
        <MySchool @myEvent="callback" />
        <!-- 第二种绑定事件的方法, 通过ref绑定 , 这种方法更加灵活-->
        <MySchool ref="sch" />
    </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
export default {
    name: "App",
    data: function () {
        return {
            id: 1,
        };
    },
    components: {
        MySchool,
    },
    methods: {
        callback(e) {
            console.log("myEvent被触发了", e);
        },
    },
    mounted() {
        this.$refs.sch.$on("myEvent", this.callback);
    },
};
</script>

<style></style>
