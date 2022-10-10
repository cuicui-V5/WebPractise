<template>
  <div>
    <h1>hello Vue!</h1>
    <MySchool />
    <MyStudent />
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  data: function () {
    return {
      id: 1,
    };
  },
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

<style>
</style>