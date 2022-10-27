<template>
    <div>
        <ul>
            <li>
                <!-- 第一种传递参数的方法: 字符串法 -->
                <router-link :to="`/MyHome/2/detail/${123}/${'hello'}`">message001</router-link>
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
                &nbsp;&nbsp;
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
