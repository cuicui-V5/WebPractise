<template>
  <!-- 编写html结构 -->
  <div>
    {{ name }}
  </div>
</template>

<script>
// 编写脚本
export default {
  data() {
    return {
      name: "tim",
    };
  },
};
</script>

<style>
/* 编写css样式 */
div {
  background-color: red;
}
</style>
