云集现在也是 React Native 的运行环境（目前支持 iOS 平台）。如果你想提交你的 React Native app 到云集，需要这样做：

### React Native 应用开发

基于 React Native v0.13.2 开发你的应用；

图片等静态资源文件，以 Base64 写入 JS 开发文件、或放在云端通过 URL 引入为宜。


### 打包 JSBundle 之前


如果曾修改过 AppDelegate.m 文件，请务必在打包之前检查 jsCodeLocation 的值是否正确：

```
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];
```

如果未曾修改过 AppDelegate.m 文件，可以跳过这一步。


### JSBundle 的生成
 
```
$ react-native bundle --minify
```

即可打包得到 JSBundle 文件。


＊ JSBundle 文件的后缀必须为 `.jsbundle`


### 应用提交

React Native app 的提交功能目前正在内测，即将上线。

上线之后，即可在云集开发者中心提交你的应用。