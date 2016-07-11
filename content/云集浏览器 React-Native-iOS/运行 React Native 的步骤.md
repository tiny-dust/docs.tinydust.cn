## 安装 React Native

请按照 Facebook 的[官方教程](https://facebook.github.io/react-native/docs/getting-started.html)安装 React Native。

如果您之前搭建过 iOS 和安卓开发的相关环境，您可以使用以下命令安装 React Native 命令行工具：
```
npm install -g react-native-cli
```

## 创建 hello world 项目

```
react-native init AwesomeProject
```

## 使用指定的 React Native 版本

修改 AwesomeProject 目录下 package.json 中 React Native 的版本为 0.13.2：

```
"dependencies": {
  "react-native": "^0.13.2"
}
```

接着执行 `npm install` 安装指定版本的 React Native。

## 打包

```
react-native bundle --minify
```

## 将 jsbundle 上传到服务器

将 `ios/main.jsbundle` 上传到服务器，并记录下它的 URL。

## 添加进云集浏览器

打开云集浏览器，进入「手动添加」界面。输入 jsbundle 的 URL，点击「添加」。

![React Native Add Demo](%image_url%/rnadd.png)

## 运行 React Native app

如果添加成功，您可以在您的云集浏览器主屏上看到您的 React Native app，点击即可运行。

![React Native Run Demo](%image_url%/rndemo.gif)
