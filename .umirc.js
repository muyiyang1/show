
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash:true,
  history: 'hash',
  theme:'./src/thems.js',
  outputPath: './docs',
  // base: '/show',
  // publicPath: "/show/",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'show',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
