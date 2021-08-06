// 该对象将会被 webpack-merge 合并入最终的 webpack 配置

// process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: './', // Default: '/'
  outputDir: 'dist/my-vue3', // Default: 'dist'
  productionSourceMap: true, // Default: true
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  devServer: {
    // proxy: 'http://localhost:4000',
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  },

  // 简单的配置方式
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },
  // 链式操作 (高级)
  // chainWebpack: config => {
    // const svgRule = config.module.rule('svg')

    // // 清除已有的所有 loader。
    // // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear()

    // // 添加要替换的 loader
    // svgRule
    //   .use('vue-svg-loader')
    //     .loader('vue-svg-loader')

    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //     .tap(options => {
    //       // 修改它的选项...
    //       return options
    //     })
    //   .rule('graphql')
    //   .test(/\.graphql$/)
    //   .use('graphql-tag/loader')
    //     .loader('graphql-tag/loader')
    //     .end()
    //   // 你还可以再添加一个 loader
    //   .use('other-loader')
    //     .loader('other-loader')
    //     .end()

    // config
    //   .plugin('html')
    //   .tap(args => {
    //     return [/* 传递给 html-webpack-plugin's 构造函数的新参数 */]
    //   })
  // }
}