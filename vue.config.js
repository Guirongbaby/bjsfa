module.exports = {
  devServer: {
    proxy: {
<<<<<<< HEAD
      "/api": {
=======
      "^/api": {
>>>>>>> 9af339797bfe716d8bbca6f57735a0503e7f3ce5
        target: "http://localhost:8848/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api" // rewrite path
        }
      },
<<<<<<< HEAD
      "/bj": {
=======
      "^/bj": {
>>>>>>> 9af339797bfe716d8bbca6f57735a0503e7f3ce5
        target: "http://localhost:8848/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/bj": "/bj" // rewrite path
        }
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        // data: `@import "./src/lib/hotcss/px2rem.scss";`
        data: '@import "./src/assets/style/main.scss";'
      }
    }
  }
};
