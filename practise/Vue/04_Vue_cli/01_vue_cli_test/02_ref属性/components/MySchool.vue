<template>
  <div>
    <h1 id="school">学校名称是 {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "xx小学",
    };
  },
};
</script>

<style>
#school {
  color: violet;

  font-size: 20px;
}
</style>