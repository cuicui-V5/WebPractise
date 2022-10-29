<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header">
                    <h2>Vue Router Demo</h2>
                    <button @click="back">back</button>
                    <button @click="forward">forward</button>
                    <input type="text" @keydown.enter="go($event.target.value)" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <router-link
                        replace
                        class="list-group-item"
                        active-class="active"
                        to="/MyAbout"
                    >
                        About
                    </router-link>
                    <router-link
                        replace
                        class="list-group-item"
                        active-class="active"
                        :to="{
                            name: 'jia',
                        }"
                    >
                        Home
                    </router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.back();
        },
        forward() {
            this.$router.forward();
        },
        go(n) {
            this.$router.go(n);
        },
    },
};
</script>

<style lang="less" scoped></style>
