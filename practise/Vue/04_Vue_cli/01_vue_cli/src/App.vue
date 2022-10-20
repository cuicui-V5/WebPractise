<template>
    <div id="app">
        <div class="container">
            <SearchGithub></SearchGithub>
            <ListGithub></ListGithub>
        </div>
    </div>
</template>

<script>
import ListGithub from "./components/listGithub.vue";
import SearchGithub from "./components/searchGithub.vue";
export default { components: { ListGithub, SearchGithub } };
</script>

<style lang="less"></style>
