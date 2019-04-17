
// 导入主题变量
const themeVars = require('./src/theme');

module.exports = {
  components: './src/components/[Zet]**/workflows.js',
  defaultExample: true,
  ribbon: {
    url: 'https://github.com/styleguidist/react-styleguidist',
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-3'],
              plugins: [
                'transform-class-properties',
                'add-module-exports',
                ['import',
                  {
                    libraryName: 'antd',
                    style: true,
                  },
                ],
              ],
            },
          },
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }, {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            }, {
              loader: 'css-loader',
            }, {
              loader: 'less-loader',
              options: {
                modifyVars: themeVars,
              },
            },
          ],
        },
      ],
    },
  },
};
