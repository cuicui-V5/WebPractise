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
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
