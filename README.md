# react_templete
### 项目搭建
[搭建项目之前确认安装 node、npm](https://zhuanlan.zhihu.com/p/57151959)
#### 1.1 目录结构创建
搭建项目之前确认安装 node、npm。
>创建
```cmd
$ mkdir min-react-demo    // 创建目录
$ cd min-react-demo       // 选择目录
$ npm init                // 初始化项目
```

>手动添加目录结构，如下：

```cmd
min-react-demo
    -- src
      -- index.js
      -- index.html
    -- .babelrc
    -- package.json
```

>./src/index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'min-react-demo';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept(); // 热更新
```

>./src/index.ejs
>
```ejs
&lt;!DOCTYPE html&gt;
&lt;html>
  &lt;head>
    &lt;title]]>min-react-demo&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;div id="app"&gt;&lt;/div>
  &lt;/body>
&lt;/html>
```
>./webpack.config.js

```javascript
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '127.0.0.1',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
    port: '8888',
    contentBase: './dist',
    hot: true,
    open: true
  }
};
```

>./.babelrc

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

#### 1.2、安装依赖
1. webpack 依赖安装
2. babel 依赖安装
babel-loaderloader 是预处理器，webpack在处理静态文件的时候，需要使用loader来加载各种文件，比如：html文件需要使用html-loader,css需要使用css-loader、style-loader等等。babel-loader 是用于处理 ES6+
3. React依赖安装
4. React热更新 gaearon/react-hot-loader

>此时的package.json 配置

```json
{
  "name": "min-react-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "xxx",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.3.3",
    "@babel/preset-env": "^7.3.1",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "html-webpack-plugin": "^3.2.0",
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "react-hot-loader": "^4.7.0",
    "webpack": "^4.29.5",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.1.14"
  }
}
```

#### 1.3、项目运行启动
>$ gulp server 
>
访问 http://localhost:3001/
