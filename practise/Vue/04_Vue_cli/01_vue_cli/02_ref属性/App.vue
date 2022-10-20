<template>
  <div>
    <h1 ref="h1">hello Vue!</h1>
    <MySchool />
    <MyStudent />
    <button @click="show">showDom</button>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
  data: function () {
    return {
      id: 1,
    };
  },
  methods: {
    show() {
      console.log(this.$refs);
    },
  },
};
</script>

<style>
</style>