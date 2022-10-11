<template>
  <div>
    <h1 id="student">学生名称是 {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "小明",
    };
  },
};
</script>

<style>
#student {
  color: yellow;

  font-size: 30px;
}
</style>