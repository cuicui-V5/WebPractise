<template>
    <div>
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <!-- 嵌套路由一定要写完整路径 -->
                        <router-link class="list-group-item" active-class="active" to="/MyHome/1">
                            News
                        </router-link>
                    </li>
                    <li>
                        <router-link class="list-group-item" active-class="active" to="/MyHome/2">
                            Message
                        </router-link>
                    </li>
                </ul>
                <!-- 这里的include必须写组件名, 组件名必须在组件内定义name -->
                <keep-alive include="MyHome_one">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
