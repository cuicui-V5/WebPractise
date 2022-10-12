<template>
    <div id="student">
        <h1>学生名称是 {{ name | myFilter }}</h1>
        <h1>学生年龄是 {{ age | myFilter}}</h1>
        <h1>学生性别是 {{ sex }}</h1>
    </div>
</template>

<script>
// import { mixin } from "./mixin.js";
export default {

    name: "MyStudent",
    //   简单声明
    //   props: ["name", "age", "sex"],

    //   对象声明方式, 可以指定数据类型
    //   props: {
    //     name: String,
    //     age: Number,
    //     sex: String,
    //   },

    // 复杂对象声明方式, 可以指定数据类型, 是否必需, 默认值
    props: {
        name: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
            default: 200,
        },
        sex: {
            type: String,
            require: true,
        },
    },

    // mixins: [mixin]

};
</script>

<style>
#student {
    background-color: yellow;

    font-size: 30px;
}
</style>