<template>
    <div>
        <div class="row">
            <div class="card" v-for="item in users" :key="item.login">
                <a :href="item.html_url" target="_blank">
                    <img :src="item.avatar_url" style="width: 100px" />
                </a>
                <p class="card-text">{{ item.login }}</p>
            </div>
            <h1 v-if="!users.length">welcome to github search</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        };
    },
    methods: {
        transUser(users) {
            this.users = users;
        },
    },
    mounted() {
        this.$bus.$on("transUser", this.transUser);
    },
};
</script>

<style lang="less" scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}
.card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>
