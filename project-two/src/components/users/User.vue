<template>
  <div>
    <el-tree :data="menus" 
    show-checkbox 
    node-key="name" 
    :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      defaultProps:{
        label:'name',//显示的内容
        children:'children'
      }
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
    //this.$router.options.routes 可以拿到初始化时配置的路由规则
  },
}
</script>

<style lang="less" scoped>
</style>