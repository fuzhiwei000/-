<template>
  <div class="workMent">
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>

    </el-table>
    <Page :url="url" :total="total"></Page>
  </div>
</template>

<script>
import Page from '@/components/common/Pageing.vue'
export default {
  components: {
    Page
  },
  data() {
    return {
      tableData: [],
      total: 0,//总条目数
      url: '/works',
      loading: true,
    }
  },
 
}
</script>

<style lang="less" scoped>
.workMent {
  .el-pagination {
    margin-top: 20px;
    text-align: left;
  }
}
</style>