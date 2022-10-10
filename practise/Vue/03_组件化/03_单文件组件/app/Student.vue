<template>
  <div>
    <h1>学生名称是 {{ name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "小明",
    };
  },
};
</script>

<style>
h1 {
  color: yellow;

  font-size: 30px;
}
</style>