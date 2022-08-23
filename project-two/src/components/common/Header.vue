<template>
    <div class="header">
        <el-header>
            <div class="title">通用管理系统</div>
            <div class="name">{{ name }}</div>
        </el-header>
    </div>
</template>

<script>
import { getToken } from "@/utils/setToken";
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = getToken('username')
    },
}
</script>

<style lang="less" scoped>
.header {
    .el-header {
        display: flex;
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        justify-content: space-between;

        .title {
            font-size: 24px;
            width: 200px;
        }

    }
}
</style>