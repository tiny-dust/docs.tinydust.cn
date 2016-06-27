此 API 可以让 Web app 查询用户设备上添加（安装）了哪些 Web app。

## 支持的平台
* iOS (2.0)
* Android (1.8.7)

## 方法

```
navigator.apps.find(query, callback);
```

* query: 用于匹配的查询对象
  * name: 可选，Web app 的名字
  * url: 可选，Web app 的网址
  * manifestURL: 可选，Web app 的网址
* callback: 查询结束后的回调函数，回调函数只有一个参数：
  * apps: 查询后得到的 Web app 对象数组。
  
当 query 为 `null` 或 `{}` 时，将查询用户添加的所有 Web app。当查询时有错误发生或用户没有添加任何 Web app 时，则在回调函数中返回一个空数组。
  
## 例子

```
navigator.apps.find({
  name: '美团'
}, function (apps) {
  apps.forEach(function (app) {
    console.log(app.name);        // 美团外卖
    console.log(app.url);         // http://i.waimai.meituan.com/
    console.log(app.iconURL);     // http://...
    console.log(app.author);      // 北京三快有限公司
    console.log(app.manifestURL); // null
    console.log(app.type);        // web
  });
});

navigator.apps.find({
  name: '游戏',
  url: 'http://51h5.com'
}, function (apps) {
  console.log(apps.length);  // 可能为 1，因为一般情况下只有一个火舞游戏
});
```
