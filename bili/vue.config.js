module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://i0.hdslb.com', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}