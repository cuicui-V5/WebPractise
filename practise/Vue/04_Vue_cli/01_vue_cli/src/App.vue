<template>
    <div>
        <h1>你好Vue</h1>
        <button @click="student">点击发送请求学生</button>
        <button @click="car">点击发送汽车</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        student() {
            console.log("发送了请求");
            axios
                .get("http://localhost:8080/apiStu/student")
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        car() {
            console.log("发送了请求");
            axios
                .get("http://localhost:8080/apicar/car")
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        },
    },
};
</script>
