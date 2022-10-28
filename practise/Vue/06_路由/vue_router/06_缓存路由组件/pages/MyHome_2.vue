<template>
    <div>
        <ul>
            <li>
                <!-- 第一种传递参数的方法: 字符串法 -->
                <router-link :to="`/MyHome/2/detail?id=3123123&tittle=31321`">
                    message001
                </router-link>
                <button @click="push">push</button>
                <button @click="replace">replace</button>
            </li>

            <li>
                <!-- 第二种传递参数的方法, 对象法 -->
                <router-link
                    :to="{
                        name: 'xiangqing',
                        query: {
                            id: '002',
                            tittle: `Vue router test`,
                        },
                    }"
                >
                    message002
                </router-link>
                <button @click="push">push</button>
                <button @click="replace">replace</button>
            </li>
            <li>
                <router-link
                    :to="{
                        name: 'xiangqing',
                        params: {
                            id: '002',
                            tittle: `Vue router test`,
                        },
                    }"
                >
                    message003
                </router-link>
                <button @click="push">push</button>
                <button @click="replace">replace</button>

                &nbsp;&nbsp;
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        push() {
            this.$router.push({
                name: "xiangqing",
                query: {
                    id: "002",
                    tittle: `push test`,
                },
            });
        },
        replace() {
            this.$router.replace({
                name: "xiangqing",
                query: {
                    id: "007",
                    tittle: `replace test`,
                },
            });
        },
    },
    beforeDestroy() {
        console.log("destroyed");
    },
};
</script>

<style lang="less" scoped></style>
