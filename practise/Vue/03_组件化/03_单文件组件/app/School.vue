<template>
  <div>
    <h1>学校名称是 {{ name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "xx小学",
    };
  },
};
</script>

<style>
h1 {
  color: violet;

  font-size: 20px;
}
</style>