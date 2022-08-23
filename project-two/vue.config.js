const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',//指向要转换的接口地址,api就代表这个地址
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''//对请求路径进行重定向以匹配到正确的请求地址http://XX.XX.XX.XX:8081/login
        }
      }
    }
  }
})
