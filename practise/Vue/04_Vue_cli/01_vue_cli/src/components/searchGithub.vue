<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" ref="input" />
                &nbsp;
                <button @click="sendUsers($event)">Search</button>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        sendUsers() {
            axios
                .get(`https://api.github.com/search/users?q=${this.$refs.input.value}`)
                .then(res => {
                    console.log(res.data.items);
                    this.$bus.$emit("transUser", res.data.items);
                })
                .catch(err => {
                    console.error(err.message);
                });
        },
    },
};
</script>

<style lang="less" scoped></style>
