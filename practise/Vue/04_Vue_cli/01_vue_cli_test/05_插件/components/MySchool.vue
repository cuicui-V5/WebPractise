<template>
    <div>
        <h1 id="school">学校名称是 {{ name }}</h1>
    </div>
</template>

<script>
import { mixin } from "./mixin.js";
export default {

    name: "MySchool",
    data() {
        return {
            name: "xx小学",
        };
    },
    mixins: [mixin]
};
</script>

<style>
#school {
    color: violet;

    font-size: 20px;
}
</style>