const { defineConfig } = require("@vue/cli-service");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Decentralized Library - Mind Palace, The Second Brain";
      return args;
    });
  },
});

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{
          context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
          to: 'webcomponents'
        }]
      })
    ]
  }
};  