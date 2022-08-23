<template>
    <div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[10, 20, 50, 100]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>

</template>

<script>
import { getTableData } from "@/utils/table";

export default {
    props: {
        "total": Number,
        "url": String
    },
    data() {
        return {
            page: 1,//当前页数
            size: 10,//每页显示条数
        }
    },
    methods: {
        handleSizeChange(val) {
            this.size = val,
                this.page = 1
            console.log(`每页 ${val} 条`);
            getTableData(this.$parent, '/works', { page: this.page, size: this.size }, ['completed'])

        },
        handleCurrentChange(val) {
            this.page = val
            console.log(`当前页: ${val}`);
            getTableData(this.$parent, '/works', { page: this.page, size: this.size }, ['completed'])

        },
    },
    created() {
        getTableData(this.$parent, '/works', { page: this.page, size: this.size }, ['completed'])

    },
}
</script>

<style lang="less" scoped>
</style>